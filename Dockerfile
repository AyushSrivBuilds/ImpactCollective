# Stage 1: Base image with Node.js
FROM node:18-alpine AS base
WORKDIR /app

# Stage 2: Install dependencies
FROM base AS deps
RUN apk add --no-cache libc6-compat
COPY package*.json ./
RUN npm ci

# Stage 3: Build the application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Stage 4: Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

# Create a non-root user and group
RUN addgroup --system --gid 1001 appgroup && \
    adduser --system --uid 1001 --ingroup appgroup appuser

# Copy necessary files with correct ownership
# We need package.json and node_modules (with dev deps like vite) to run `npm run preview`.
COPY --from=deps --chown=appuser:appgroup /app/node_modules ./node_modules
COPY --chown=appuser:appgroup package.json .

# Copy the built application from the builder stage
COPY --from=builder --chown=appuser:appgroup /app/dist ./dist

USER appuser

# EXPOSE 3000
# ENV PORT 3000

# Command to run the app using Vite's preview server
# `--host 0.0.0.0` makes it accessible from outside the container.
# Vite preview should respect the PORT env var.
CMD ["echo", "Hello from Cloud Run container"]