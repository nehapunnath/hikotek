import React from 'react';
import HikotekLogo from '/Hikotek_Logo.png';
import partner1 from '../assets/p1.jpg';
import partner2 from '../assets/p2.jpg';
import partner3 from '../assets/p3.jpg';
import partner4 from '../assets/p4.jpg';
import partner5 from '../assets/p5.jpg';

const AboutUs = () => {
    const reasons = [
        {
            title: 'Fast Delivery',
            desc: 'Offers expedited shipping services with delivery times as short as 2-4 working days to several international destinations.',
            icon: 'fa-solid fa-truck',
        },
        {
            title: 'Customer Support',
            desc: 'Provides 24/7 online service and daily updates on orders. Implements strict quality control measures with five stages of testing for each product.',
            icon: 'fa-solid fa-headphones',
        },
        {
            title: 'Warranty and Support',
            desc: 'Provides comprehensive warranty coverage including replacements, repairs, and lifetime firmware updates',
            icon: 'fa-solid fa-screwdriver-wrench',
        },
    ];

    const partners = [partner1, partner2, partner3, partner4, partner5];

    return (
        <div className="bg-white text-gray-800 font-inter">
            {/* Hero Section with Logo */}
            <section className="bg-white text-center py-20 px-6 shadow-inner">
                <div className="flex justify-center mb-6">
                    <img src={HikotekLogo} alt="Hikotek Logo" className="h-20 object-contain drop-shadow-md" />
                </div>
            </section>

            {/* Company Profile */}
            <section className="bg-navy-blue py-20 px-4 sm:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-wide uppercase border-b-4 border-gold inline-block pb-2 text-white">
                            Company Profile
                        </h2>
                    </div>

                    <div className="bg-white bg-opacity-5 backdrop-blur-md p-8 sm:p-10 rounded-xl shadow-lg">
                        <p className="text-lg sm:text-xl leading-relaxed tracking-wide text-justify">
                            Hikotek Mechanical Parts Distribution, founded in 2024, is a rapidly growing company specializing in the distribution of mechanical parts to both national and international clients. With a focus on efficiency and customer satisfaction, Hikotek has quickly established itself as a reliable partner in the mechanical parts supply chain.
                            <br /><br />
                            <span className="font-semibold">Client Base:</span> <br />
                            International Clients: 25 <br />
                            National Clients: 50
                            <br /><br />
                            Hikotek aims to provide high-quality products and services to its clients, including streamlined logistics and delivery. The company's operations span across international markets, reaching various countries in Europe (France, Spain, UK), North America (America, Canada), Australia, New Zealand, and parts of Asia (Singapore, Thailand).
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="bg-gray-50 py-16 px-6">
                <h2 className="text-4xl text-center font-bold text-navy-blue mb-12">Why Choose Us</h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {reasons.map((item, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg text-center transition"
                        >
                            <i className={`${item.icon} text-4xl text-navy-blue mb-4`}></i>
                            <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                            <p className="text-gray-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Our Partners */}
            <section className="py-16 px-6 max-w-6xl mx-auto">
                <h2 className="text-4xl text-center font-bold text-navy-blue mb-10">Our Partners</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                    {partners.map((logo, i) => (
                        <img
                            key={i}
                            src={logo}
                            alt={`Partner ${i + 1}`}
                            className="w-full h-40 object-contain grayscale hover:grayscale-0 transition duration-300"
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
