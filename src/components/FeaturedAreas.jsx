import { ChevronLeftIcon, ChevronRightIcon, CircleX, InfoIcon, MapPinIcon } from "lucide-react";
import React, { useState, useEffect } from "react";


const FeaturedAreas = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [visibleItems, setVisibleItems] = useState([]);
    const [selectedArea, setSelectedArea] = useState(null);
    const [isAnimating, setIsAnimating] = useState(false);

    const categories = ["All", "App", "Card", "Web"];

    const areaData = [
        {
            id: 1,
            name: "Anaheim",
            category: "App",
            image: "/Anaheim.jpg",
            description: "Anaheim, CA, is a vibrant city with Disneyland, sports teams, and diverse cuisine.",
            stats: { avgPrice: "$750k", walkScore: 82, popularity: "High" }
        },
        {
            id: 2,
            name: "Fullerton",
            category: "Card",
            image: "/Fullerton.jpg",
            description: "Fullerton is a full-service city renowned for its unique mix of residential, commercial and industrial, educational and cultural environments that provide an outstanding quality of life for its residents.",
            stats: { avgPrice: "$450k", walkScore: 85, popularity: "Medium" }
        },
        {
            id: 3,
            name: "Huntington",
            category: "Web",
            image: "/Huntington.jpg",
            description: "Huntington is a vital rail-to-river transfer point for the marine transportation industry. It is home to the Port of Huntington Tri-State, the second-busiest inland port in the United States",
            stats: { avgPrice: "$425k", walkScore: 70, popularity: "High" }
        },
        {
            id: 4,
            name: "Irvine",
            category: "App",
            image: "/Irvine.jpg",
            description: "Irvine is one of the nation's largest planned urban communities and encompasses more than 65 square miles.",
            stats: { avgPrice: "$525k", walkScore: 75, popularity: "High" }
        },
        {
            id: 5,
            name: "Los Angeles",
            category: "Card",
            image: "/Los Angeles.jpg",
            description: "It is the second most populous city and metropolitan area in the U.S.. The city is known for its pleasant weather, urban sprawl, traffic, beaches, and ethnic and racial diversity. It is home to the American entertainment industry.",
            stats: { avgPrice: "$500k", walkScore: 68, popularity: "Medium" }
        },
        {
            id: 6,
            name: "Santa Ana",
            category: "Web",
            image: "/Santa Ana.jpg",
            description: "It is the County Seat, the second-most populous city in Orange County, and is home to a vibrant evening scene and arts community.",
            stats: { avgPrice: "$400k", walkScore: 72, popularity: "Medium" }
        },
        {
            id: 7,
            name: "Santa Monica",
            category: "App",
            image: "/santa monica.jpg",
            description: "Santa Monica is a popular resort town, owing to its climate, beaches, and hospitality industry.It has a diverse economy, hosting headquarters of companies such as Hulu, Activision Blizzard, Universal Music Group, Starz Entertainment, Lionsgate Studios, Illumination and The Recording Academy.",
            stats: { avgPrice: "$440k", walkScore: 65, popularity: "Medium" }
        },
        {
            id: 8,
            name: "RiverSide",
            category: "Card",
            image: "/riverside.jpg",
            description: "Riverside is a city in and the county seat of Riverside County, California, United States. It is named for its location beside the Santa Ana River.",
            stats: { avgPrice: "$1.2M", walkScore: 60, popularity: "High" }
        },
        {
            id: 9,
            name: "Indio",
            category: "Web",
            image: "/indio.jpg",
            description: "The City of Indio is currently the largest and fastest growing city in Riverside County’s Coachella Valley with over 93,000 residents.",
            stats: { avgPrice: "$380k", walkScore: 60, popularity: "Low" }
        },
        {
            id: 10,
            name: "Cathedral City",
            category: "Web",
            image: "/cathedral.jpg",
            description: "Cathedral City is a desert resort city in Riverside County, California, United States, within the Colorado Desert's Coachella Valley. It is situated between Palm Springs and Rancho Mirage.",
            stats: { avgPrice: "$420k", walkScore: 62, popularity: "Medium" }
        },
        {
            id: 11,
            name: "Camarillo",
            category: "Web",
            image: "/camarillo.jpg",
            description: "Nestled in a coastal plain between the beach and mountains, Camarillo offers year-round sunshine in a family friendly and safe environment, with top-class amenities.",
            stats: { avgPrice: "$420k", walkScore: 62, popularity: "Medium" }
        },
        {
            id: 12,
            name: "Ontario",
            category: "Web",
            image: "/ontario.jpg",
            description: "Ontario is a bustling transportation hub in Southern California, known for its rich agricultural heritage, entertainment scene, and shopping opportunities.",
            stats: { avgPrice: "$420k", walkScore: 62, popularity: "Medium" }
        },
        {
            id: 13,
            name: "San Bernardino",
            category: "Web",
            image: "/san b.jpg",
            description: "From its humble beginnings as a small settlement along the Old Spanish Trail, San Bernardino has grown into a bustling metropolis.",
            stats: { avgPrice: "$420k", walkScore: 62, popularity: "Medium" }
        },
        {
            id: 14,
            name: "Fontana",
            category: "Web",
            image: "/fontana.jpg",
            description: "Fontana is known for its many parks and green spaces, its many historical sites, and its many attractions, such as the Auto Club Speedway and the Etiwanda Auto Club Speedway.",
            stats: { avgPrice: "$420k", walkScore: 62, popularity: "Medium" }
        },
        //Fontana is known for its many parks and green spaces, its many historical sites, and its many attractions, such as the Auto Club Speedway and the Etiwanda Auto Club Speedway.
    ];

    useEffect(() => {
        setIsAnimating(true);
        const filtered = activeCategory === "All"
            ? areaData
            : areaData.filter(item => item.category === activeCategory);

        setTimeout(() => {
            setVisibleItems(filtered);
            setIsAnimating(false);
        }, 300);
    }, [activeCategory]);

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
    };

    const openAreaDetails = (area) => {
        setSelectedArea(area);
    };

    const closeAreaDetails = () => {
        setSelectedArea(null);
    };

    const getNextPrev = () => {
        if (!selectedArea) return { next: null, prev: null };

        const currentIndex = visibleItems.findIndex(item => item.id === selectedArea.id);
        const prevIndex = (currentIndex - 1 + visibleItems.length) % visibleItems.length;
        const nextIndex = (currentIndex + 1) % visibleItems.length;

        return {
            next: visibleItems[nextIndex],
            prev: visibleItems[prevIndex]
        };
    };

    const { next, prev } = getNextPrev();

    return (
        <div className="py-16 px-4 md:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h3 className="text-4xl font-bold mb-4 text-[#34495E] inline-block">
                        Explore Featured Areas
                        <div className=" h-1 w-24 bg-[#3498DB] bottom-0 ml-50 transform -translate-x-1/2 mt-2"></div>
                    </h3>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Discover your dream home in our handpicked selection of exceptional neighborhoods,
                        where community spirit meets modern living in the Phoenix metropolitan area.
                    </p>
                </div>

                {/* Category Navigation */}
                {/* <div className="flex justify-center mb-10">
                    <div className="inline-flex p-1 bg-gray-100 rounded-full shadow-md">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => handleCategoryChange(category)}
                                className={`px-6 py-2 rounded-full transition-all duration-300 ${activeCategory === category
                                        ? "bg-blue-500 text-white shadow-lg"
                                        : "text-gray-700 hover:bg-gray-200"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div> */}

                {/* Area Cards Grid */}
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                    {visibleItems.map(area => (
                        <div
                            key={area.id}
                            className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                            onClick={() => openAreaDetails(area)}
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={area.image}
                                    alt={area.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">{area.name}</h3>
                                    <span className="text-xs px-3 py-1 bg-blue-100 text-[#3498DB] rounded-full">{area.category}</span>
                                </div>

                                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{area.description}</p>

                                <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                                    <div className="text-gray-500 text-sm">Avg Price: {area.stats.avgPrice}</div>
                                    <button className="flex items-center text-[#3498DB] font-medium text-sm">
                                        Explore Area
                                        <ChevronRightIcon className="w-4 h-4 ml-1" />
                                    </button>
                                </div>
                            </div>

                            <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <MapPinIcon className="w-5 h-5 text-[#3498DB]" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {visibleItems.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-16 text-gray-400">
                        <InfoIcon className="w-16 h-16 mb-4" />
                        <p className="text-xl">No areas found in this category</p>
                    </div>
                )}
            </div>

            {/* Area Detail Modal */}
            {selectedArea && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/80" onClick={closeAreaDetails}>
                        {/* <CircleX className="w-16 h-16 mb-4"/> */}
                    </div>

                    <div className="relative bg-white rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row shadow-2xl">
                        {/* Close Button */}
                        <button
                            className="absolute shadow-xl cursor-pointer top-6 right-4 z-10 bg-white/20 backdrop-blur-sm text-[#3498DB] p-2 rounded-full hover:bg-white/30 transition-colors"
                            onClick={closeAreaDetails}
                        >
                            <CircleX className="w-6 h-6" />
                        </button>

                        {/* Image Section */}
                        <div className="w-full md:w-1/2 relative">
                            <img
                                src={selectedArea.image}
                                alt={selectedArea.name}
                                className="w-full h-full object-cover"
                            />

                            {/* Navigation Controls */}
                            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                                {prev && (
                                    <button
                                        className="p-2 bg-white/30 backdrop-blur-sm rounded-full hover:bg-white/50 transition-colors"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedArea(prev);
                                        }}
                                    >
                                        <ChevronLeftIcon className="w-6 h-6 text-white" />
                                    </button>
                                )}

                                {next && (
                                    <button
                                        className="p-2 bg-white/30 backdrop-blur-sm rounded-full hover:bg-white/50 transition-colors"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedArea(next);
                                        }}
                                    >
                                        <ChevronRightIcon className="w-6 h-6 text-white" />
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="w-full md:w-1/2 p-6 md:p-8 overflow-y-auto">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-3xl font-bold text-gray-800">{selectedArea.name}</h2>
                                {/* <span className="text-sm px-3 py-1 bg-blue-100 text-blue-800 rounded-full">{selectedArea.category}</span> */}
                            </div>

                            <p className="text-gray-600 mb-8">{selectedArea.description}</p>

                            <div className="grid grid-cols-3 gap-4 mb-8">
                                <div className="bg-gray-50 p-4 rounded-lg text-center">
                                    <p className="text-sm text-gray-500 mb-1">Avg. Price</p>
                                    <p className="text-xl font-semibold text-gray-800">{selectedArea.stats.avgPrice}</p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg text-center">
                                    <p className="text-sm text-gray-500 mb-1">Walk Score</p>
                                    <p className="text-xl font-semibold text-gray-800">{selectedArea.stats.walkScore}</p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg text-center">
                                    <p className="text-sm text-gray-500 mb-1">Popularity</p>
                                    <p className="text-xl font-semibold text-gray-800">{selectedArea.stats.popularity}</p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-lg font-semibold text-gray-800">Area Highlights</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                                        </div>
                                        <p className="ml-3 text-gray-600">Modern amenities with historic charm</p>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                                        </div>
                                        <p className="ml-3 text-gray-600">Excellent school districts</p>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                                        </div>
                                        <p className="ml-3 text-gray-600">Shopping and dining experiences</p>
                                    </li>
                                </ul>
                            </div>

                            <button className="mt-8 w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg transition-colors font-medium">
                                View Properties in {selectedArea.name}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FeaturedAreas;