import React, { useState } from 'react';
import { ShoppingCart, Plus, Minus } from 'lucide-react';
import { Campaign, MerchandiseItem } from '../types';
import { useCartStore } from '../store/cartStore';

interface MerchandiseSectionProps {
  campaign: Campaign;
}

interface QuantityState {
  [key: string]: boolean;
}

const MerchandiseSection: React.FC<MerchandiseSectionProps> = ({ campaign }) => {
  const addItem = useCartStore((state) => state.addItem);
  const [showQuantity, setShowQuantity] = useState<QuantityState>({});
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
  
  if (!campaign.merchandise || campaign.merchandise.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Support Through Merchandise</h3>
        <p className="text-gray-600">No merchandise is currently available for this campaign.</p>
      </div>
    );
  }

  const handleAddToCart = (item: MerchandiseItem) => {
    if (!showQuantity[item.id]) {
      setShowQuantity(prev => ({ ...prev, [item.id]: true }));
      setQuantities(prevQuantities => ({ ...prevQuantities, [item.id]: prevQuantities[item.id] || 1 }));
    } else {
      addItem({
        id: item.id,
        campaignId: campaign.id,
        title: item.title,
        price: item.price,
        imageUrl: item.imageUrl,
        quantity: quantities[item.id] || 1,
      });
      setShowQuantity(prev => ({ ...prev, [item.id]: false }));
    }
  };

  const updateQuantity = (itemId: string, delta: number) => {
    setQuantities(prevQuantities => {
      const currentItemQuantity = prevQuantities[itemId] || 1;
      const newQuantity = Math.max(1, currentItemQuantity + delta);
      return { ...prevQuantities, [itemId]: newQuantity };
    });
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Support Through Merchandise</h3>
      <p className="text-gray-600 mb-6">
        Purchase merchandise to support this campaign. All proceeds go directly to funding our initiatives.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {campaign.merchandise.map((item) => (
          <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition duration-200">
            <div className="h-48 overflow-hidden">
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-full object-cover transform transition duration-500 hover:scale-105"
              />
            </div>
            
            <div className="p-4">
              <h4 className="font-semibold text-gray-800 mb-2">{item.title}</h4>
              <div className="flex justify-between items-center">
                <span className="text-green-600 font-medium">₹{item.price.toFixed(2)}</span>
                <div className="flex items-center gap-2">
                  {showQuantity[item.id] && (
                    <>
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center">{quantities[item.id] || 1}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </>
                  )}
                  <button 
                    onClick={() => handleAddToCart(item)}
                    className="bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700 transition duration-200 flex items-center"
                  >
                    <ShoppingCart className="w-4 h-4 mr-1" />
                    {showQuantity[item.id] ? 'Add' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MerchandiseSection;