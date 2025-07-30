import React, { useState } from 'react';
import { FaStar, FaFileDownload } from 'react-icons/fa';
import HikotekLogo from '/Hikotek_Logo.png'


const ProductPage = () => {
    const [activeTab, setActiveTab] = useState('description');
    const tabs = ['description', 'downloads', 'reviews'];

    const navyBlue = 'bg-[#0F1E44]';
    const navyHover = 'hover:bg-[#1C2A5D]';
    const textNavy = 'text-[#0F1E44]';

    const renderContent = () => {
        switch (activeTab) {
            case 'description':
                return (
                    <div className="text-gray-700 leading-relaxed">
                        <p className="mb-4 text-lg">
                            Mitutoyo offers a complete selection of Bore Gauges. The 511 series bore gauges come standard with interchangeable anvils and necessary accessories to perform close tolerance ID measurements.
                        </p>
                        <p className="font-semibold text-orange-600 mt-6 text-xl">SPECIFICATIONS</p>
                        <ul className="list-disc ml-8">
                            <li className="text-base mb-2">Range: 18-35mm</li>
                            <li className="text-base mb-2">Graduations: 0.01mm</li>
                            <li className="text-base mb-2">Accuracy: 5µm</li>
                            <li className="text-base mb-2">Indication Stability: 2µm</li>
                            <li className="text-base mb-2">Anvils: 9</li>
                            <li className="text-base mb-2">Spacers: 2</li>
                        </ul>
                    </div>
                );
            case 'downloads':
                return (
                    <div className="text-center">
                        <button className={`${navyBlue} text-white px-8 py-3 rounded-lg flex items-center justify-center mx-auto gap-3 text-lg ${navyHover} transition`}>
                            <FaFileDownload />
                            511-XXX
                        </button>
                    </div>
                );
            case 'reviews':
                return (
                    <div>
                        <h3 className="text-2xl font-semibold mb-6">Customer Feedback</h3>
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-6">
                            <div className="text-center">
                                <div className="text-5xl font-bold">0</div>
                                <div className="text-yellow-500 flex justify-center mt-2">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} size={24} />
                                    ))}
                                </div>
                                <div className="text-base text-gray-500 mt-2">0 Verified ratings</div>
                            </div>
                            <div className="flex-1 space-y-2 w-full">
                                {[5, 4, 3, 2, 1].map((star) => (
                                    <div key={star} className="flex items-center gap-4">
                                        <div className="w-full bg-gray-200 h-3 rounded">
                                            <div className="bg-yellow-400 h-3 rounded" style={{ width: `0%` }} />
                                        </div>
                                        <div className="flex text-yellow-500">
                                            {[...Array(star)].map((_, i) => (
                                                <FaStar key={i} size={14} />
                                            ))}
                                        </div>
                                        <div className="text-base text-gray-600">0%</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="text-center text-gray-600 mt-8 text-lg">No review found.</div>


                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen w-full overflow-x-hidden bg-white p-6 sm:p-10">
            <div className="logo-container">
                <img
                    className="logo"
                    src={HikotekLogo}
                    alt="Hikotek Logo"
                />
            </div>
            <div className="max-w-[1400px] mx-auto w-full my-3">

                {/* Search */}
                
                <input 
                    type="text"
                    placeholder="Search products..."
                    className="w-full p-4 border border-gray-300 rounded-lg mb-8 focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
                />

                {/* Product Layout */}
                <div className="grid md:grid-cols-2 gap-12">
                    <img
                        src="https://caltecharab.com/wp-content/uploads/2023/09/Mitutoyo-511-711-Dial-Bore-Gauge.jpg"
                        alt="Product"
                        className="w-full max-h-[500px] object-contain rounded-lg shadow-lg"
                    />
                    <div>
                        <h2 className="text-3xl font-semibold mb-4">Mitutoyo 511-711 Standard Dial Bore Gauge</h2>
                        <p className="text-gray-600 text-lg"><strong>Brand:</strong> Mitutoyo</p>
                        <p className="text-gray-600 text-lg"><strong>Model No:</strong> 511-711</p>
                        <p className="text-gray-600 text-lg"><strong>Range:</strong> 18–35mm</p>
                        <p className="text-gray-600 text-lg"><strong>Warranty:</strong> 1 Year</p>
                        <p className="text-green-600 font-medium mt-4 text-xl">In Stock</p>
                        <p className={`${textNavy} font-bold text-2xl mt-6`}>Price: 795.00 SAR (Including VAT)</p>
                        <button className={`${navyBlue} text-white mt-6 px-8 py-3 rounded-lg text-lg ${navyHover} transition`}>
                            Enquire Now
                        </button>
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex justify-center mt-12 mb-8 flex-wrap gap-4 border-b border-gray-300">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-3 capitalize text-lg font-medium transition duration-200 relative
        ${activeTab === tab ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-blue-500'}`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>


                {/* Content */}
                <div className="bg-gray-50 p-8 rounded-lg shadow-lg">{renderContent()}</div>
            </div>
        </div>
    );
};

export default ProductPage;
