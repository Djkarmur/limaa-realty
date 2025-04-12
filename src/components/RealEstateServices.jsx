import { useState } from "react";
import { Building2, Home, Factory, HeartHandshake, CircleDollarSign } from "lucide-react";

export default function RealEstateServices() {
    const [hoveredService, setHoveredService] = useState(null);

    const services = [
        {
            id: "residential",
            title: "Residential",
            icon: <Home size={48} />,
            description: "Residential Sales and Purchases",
            color: "bg-blue-500"
        },
        {
            id: "commercial",
            title: "Commercial",
            icon: <Building2 size={48} />,
            description: "Commercial Real Estate",
            color: "bg-green-500"
        },
        {
            id: "industrial",
            title: "Industry Row Land",
            icon: <CircleDollarSign size={48} />,
            description: "Investment Properties",
            color: "bg-amber-500"
        },
        {
            id: "special",
            title: "Special Use",
            icon: <HeartHandshake size={48} />,
            description: "Consultation and Advisory Services",
            color: "bg-purple-500"
        }
    ];

    return (
        <div className="w-full  py-16 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-[#3498DB] mb-2">What are you looking for?</h2>
                {/* <p className="text-gray-600 mb-12">We provide full service at every step</p> */}
                <div className="text-center mb-12">
                    <h3 className="text-4xl font-bold mb-4 text-[#34495E] inline-block">
                        Services
                        <div className=" h-1 w-24 bg-[#3498DB] bottom-0 ml-25 transform -translate-x-1/2 mt-2"></div>
                    </h3>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        We provide full service at every step
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="bg-white rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
                            onMouseEnter={() => setHoveredService(service.id)}
                            onMouseLeave={() => setHoveredService(null)}
                        >
                            <div className="p-6 flex flex-col items-center">
                                <div className={`p-4 rounded-full ${hoveredService === service.id ? service.color : 'bg-gray-100'} transition-colors duration-300 mb-4`}>
                                    <div className={`transition-colors duration-300 ${hoveredService === service.id ? 'text-white' : 'text-gray-700'}`}>
                                        {service.icon}
                                    </div>
                                </div>

                                <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                                <p className="text-gray-600 text-center text-lg">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}