import { ChevronLeftIcon, ChevronRightIcon, CircleX, InfoIcon, MapPinIcon } from "lucide-react";
import React, { useState, useEffect } from "react";


const FeaturedAreas = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [visibleItems, setVisibleItems] = useState([]);
    const [selectedArea, setSelectedArea] = useState(null);
    const [isAnimating, setIsAnimating] = useState(false);

    const categories = ["All", "Orange", "Los Angeles", "Riverside", "San Bernardino"];

    const areaData = [
        {
            id: 1,
            name: "Anaheim",
            category: "Orange",
            image: "/Anaheim.jpg",
            description: "Anaheim, CA, is a vibrant city with Disneyland, sports teams, and diverse cuisine.",
            stats: { avgPrice: "$750k", walkScore: 82, popularity: "High" }
        },
        {
            id: 2,
            name: "Fullerton",
            category: "Orange",
            image: "/Fullerton.jpg",
            description: "Fullerton is a full-service city renowned for its unique mix of residential, commercial and industrial, educational and cultural environments that provide an outstanding quality of life for its residents.",
            stats: { avgPrice: "$450k", walkScore: 85, popularity: "Medium" }
        },
        {
            id: 3,
            name: "Huntington",
            category: "Orange",
            image: "/Huntington.jpg",
            description: "Huntington is a vital rail-to-river transfer point for the marine transportation industry. It is home to the Port of Huntington Tri-State, the second-busiest inland port in the United States",
            stats: { avgPrice: "$425k", walkScore: 70, popularity: "High" }
        },
        {
            id: 4,
            name: "Irvine",
            category: "Orange",
            image: "/Irvine.jpg",
            description: "Irvine is one of the nation's largest planned urban communities and encompasses more than 65 square miles.",
            stats: { avgPrice: "$525k", walkScore: 75, popularity: "High" }
        },
        {
            id: 5,
            name: "Los Angeles",
            category: "Los Angeles",
            image: "/Los Angeles.jpg",
            description: "It is the second most populous city and metropolitan area in the U.S.. The city is known for its pleasant weather, urban sprawl, traffic, beaches, and ethnic and racial diversity. It is home to the American entertainment industry.",
            stats: { avgPrice: "$500k", walkScore: 68, popularity: "Medium" }
        },
        {
            id: 6,
            name: "Santa Ana",
            category: "Orange",
            image: "/Santa Ana.jpg",
            description: "It is the County Seat, the second-most populous city in Orange County, and is home to a vibrant evening scene and arts community.",
            stats: { avgPrice: "$400k", walkScore: 72, popularity: "Medium" }
        },
        {
            id: 7,
            name: "Santa Monica",
            category: "Orange",
            image: "/santa monica.jpg",
            description: "Santa Monica is a popular resort town, owing to its climate, beaches, and hospitality industry.It has a diverse economy, hosting headquarters of companies such as Hulu, Activision Blizzard, Universal Music Group, Starz Entertainment, Lionsgate Studios, Illumination and The Recording Academy.",
            stats: { avgPrice: "$440k", walkScore: 65, popularity: "Medium" }
        },
        {
            id: 8,
            name: "RiverSide",
            category: "RiverSide",
            image: "/riverside.jpg",
            description: "Riverside is a city in and the county seat of Riverside County, California, United States. It is named for its location beside the Santa Ana River.",
            stats: { avgPrice: "$1.2M", walkScore: 60, popularity: "High" }
        },
        {
            id: 9,
            name: "Indio",
            category: "Riverside",
            image: "/indio.jpg",
            description: "The City of Indio is currently the largest and fastest growing city in Riverside County’s Coachella Valley with over 93,000 residents.",
            stats: { avgPrice: "$380k", walkScore: 60, popularity: "Low" }
        },
        {
            id: 10,
            name: "Cathedral City",
            category: "RiverSide",
            image: "/cathedral.jpg",
            description: "Cathedral City is a desert resort city in Riverside County, California, United States, within the Colorado Desert's Coachella Valley. It is situated between Palm Springs and Rancho Mirage.",
            stats: { avgPrice: "$420k", walkScore: 62, popularity: "Medium" }
        },
        {
            id: 11,
            name: "Camarillo",
            category: "Orange",
            image: "/camarillo.jpg",
            description: "Nestled in a coastal plain between the beach and mountains, Camarillo offers year-round sunshine in a family friendly and safe environment, with top-class amenities.",
            stats: { avgPrice: "$420k", walkScore: 62, popularity: "Medium" }
        },
        {
            id: 12,
            name: "Ontario",
            category: "San Bernardino",
            image: "/ontario.jpg",
            description: "Ontario is a bustling transportation hub in Southern California, known for its rich agricultural heritage, entertainment scene, and shopping opportunities.",
            stats: { avgPrice: "$420k", walkScore: 62, popularity: "Medium" }
        },
        {
            id: 13,
            name: "San Bernardino",
            category: "San Bernardino",
            image: "/san b.jpg",
            description: "From its humble beginnings as a small settlement along the Old Spanish Trail, San Bernardino has grown into a bustling metropolis.",
            stats: { avgPrice: "$420k", walkScore: 62, popularity: "Medium" }
        },
        {
            id: 14,
            name: "Fontana",
            category: "San Bernardino",
            image: "/fontana.jpg",
            description: "Fontana is known for its many parks and green spaces, its many historical sites, and its many attractions, such as the Auto Club Speedway and the Etiwanda Auto Club Speedway.",
            stats: { avgPrice: "$420k", walkScore: 62, popularity: "Medium" }
        },
        {
            id: 15,
            name: "Brea",
            category: "Orange",
            image: "/brea.jpg",
            description: "Brea is known for its many parks and green spaces, its many historical sites, and its many attractions, such as the Brea Historical Society and the Brea Museum.",
            stats: { avgPrice: "$420k", walkScore: 62, popularity: "Medium" }
        },
        {
            id: 16,
            name: "Buena Park",
            category: "Orange",
            image: "/buena.jpg",
            description: "the city is home to America’s first theme park, Knott’s Berry Farm, and many other entertaining attractions. Once part of Rancho Los Coyotes, it was here that the Mexican War (1846-1848) was settled.",
            stats: { avgPrice: "$420k", walkScore: 62, popularity: "Medium" }
        },
        {
            id: 17,
            name: "Cypress",
            category: "Orange",
            image: "/cypress.jpg",
            description: "Cypress is the most northwest city in Orange County, approximately 10 miles from the coast, bordering Los Angeles County. The city offers a hometown feel, a thriving new business corridor and convenient access to freeways and local attractions.",
            stats: { avgPrice: "$420k", walkScore: 62, popularity: "Medium" }
        },
        {
            id: 18,
            name: "Garden Grove",
            category: "Orange",
            image: "/garden.jpg",
            description: "Garden Grove is a small urban community within Orange County. Well known for the Crystal Cathedral and Annual Strawberry Festival at Village Green Park, the city is centrally located with easy access to many major Orange County destinations including Disneyland, Knott’s Berry Farm, and the beach.",
            stats: { avgPrice: "$420k", walkScore: 62, popularity: "Medium" }
        },
        {
            id: 19,
            name: "La Habra",
            category: "Orange",
            image: "/habra.jpg",
            description: "The most populous city in Orange County, California. It is located in the northwestern part of the county. La Habra is known for its many parks and green spaces, its many historical sites, and its many attractions, such as the La Habra Historical Society and the La Habra Museum.",
            stats: { avgPrice: "$420k", walkScore: 62, popularity: "Medium" }
        },
        {
            id: 20,
            name: "La Palma",
            category: "Orange",
            image: "/palma.jpg",
            description: "La Palma was incorporated on October 26, 1955. It was originally incorporated as Dairyland, and was one of three dairy cities in the region (the other two being Dairy Valley, now Cerritos, and Dairy City, now Cypress) but when the dairies moved east in 1965, the name of the community was changed to La Palma, after the region's Spanish heritage and its main thoroughfare, La Palma Avenue.",
            stats: { avgPrice: "$420k", walkScore: 62, popularity: "Medium" }
        },
        {
            id: 21,
            name: "Laguna Hills",
            category: "Orange",
            image: "/laguna.jpg",
            description: "Laguna Hills is built on one of the major land grants developed during the rancho era. Following Mexico's independence from Spain in 1821, those who had served in the government or who had friends in authority, were given vast lands for cattle grazing.",
            stats: { avgPrice: "$420k", walkScore: 62, popularity: "Medium" }
        },
        {
            id: 22,
            name: " Los Alamitos",
            category: "Orange",
            image: "/alamitos.jpg",
            description: "the city is most well known for the Joint Forces Training Base that occupies a portion of the city. The profile for the city of Los Alamitos in Orange County, California includes city history and information for residential services, shopping, dining, and points of interest throughout the city.",
            stats: { avgPrice: "$420k", walkScore: 62, popularity: "Medium" }
        },
        {
            id: 23,
            name: "Mission-Viejo",
            category: "Orange",
            image: "/Mission-Viejo.jpg",
            description: "Mission Viejo is a large master-planned community located in the Saddleback Valley in South Orange County. It is considered one of the largest master-planned communities ever built under a single project in the United States.",
            stats: { avgPrice: "$420k", walkScore: 62, popularity: "Medium" }
        },
        {
            id: 24,
            name: "Placentia",
            category: "Orange",
            image: "/placentia.jpg",
            description: "This includes the community of Atwood, which is included in the city of Placentia, and is located in its southeastern quadrant. Primarily referred to as a bedroom community, Placentia is known for its quiet neighborhoods.",
            stats: { avgPrice: "$420k", walkScore: 62, popularity: "Medium" }
        },
        {
            id: 25,
            name: "Rancho Santa Margarita",
            category: "Orange",
            image: "/marga.jpg",
            description: "Rancho Santa Margarita is a city in Orange County, California, United States. One of Orange County's youngest cities, Rancho Santa Margarita is a master-planned community. The population was 47,853 at the 2010 census, up from 47,214 at the 2000 census.",
            stats: { avgPrice: "$420k", walkScore: 62, popularity: "Medium" }
        },
        {
            id: 26,
            name: "Tustin",
            category: "Orange",
            image: "/tustin.jpg",
            description: "Tustin is a city located in Orange County, California, United States, within the Los Angeles metropolitan area. In 2020, Tustin had a population of 80,276. The city does not include the unincorporated community of North Tustin.",
            stats: { avgPrice: "$420k", walkScore: 62, popularity: "Medium" }
        },
        {
            id: 27,
            name: "Yorba Linda",
            category: "Orange",
            image: "/yorba.jpg",
            description: "Yorba Linda is known for its many parks and green spaces, its many historical sites, and its many attractions, such as the Richard Nixon Presidential Library and Museum and the Yorba Linda Historical Society. Yorba Linda is a city located in the county of Orange in the U.S. state of California.",
            stats: { avgPrice: "$420k", walkScore: 62, popularity: "Medium" }
        },
        {
            id: 28,
            name: "Norwalk",
            category: "Los Angeles",
            image: "/norwalk.jpeg",
            description: "The area known as 'Norwalk' was first home to the Shoshonean Native American tribe. They survived primarily on honey, an array of berries, acorns, sage, squirrels, rabbits and birds. Their huts were part of the Sejat Indian village.",
            stats: { avgPrice: "$420k", walkScore: 62, popularity: "Medium" }
        },
        {
            id: 29,
            name: "Long Beach",
            category: "Los Angeles",
            image: "/long.jpg",
            description: "Long Beach, located in Southern California, is a vibrant coastal city known for its picturesque waterfront, diverse community, and rich cultural heritage. As a major port city, Long Beach plays a vital role in global trade while offering a unique blend of urban amenities and natural beauty.",
            stats: { avgPrice: "$420k", walkScore: 62, popularity: "Medium" }
        },
        {
            id: 30,
            name: "La Mirada",
            category: "Los Angeles",
            image: "/mirada.jpg",
            description: "The City continues to offer many advantages to its residents: a variety of single-family housing, excellent parks and recreational centers, a low crime rate, and quality senior housing. La Mirada places a strong emphasis on City beautification, with well maintained parkways, streets and parks. The La Mirada Theatre for the Performing Arts is one of the finest in Southern California, featuring plays, musicals and children's productions. The City's motto is Dedicated to Service.",
            stats: { avgPrice: "$420k", walkScore: 62, popularity: "Medium" }
        },
        {
            id: 31,
            name: "Whittier",
            category: "Los Angeles",
            image: "/Whittier.jpg",
            description: "The City of Whittier has a diverse and colorful history beginning with the Gabrielino Indians who first inhabited the area during the City’s pre-history. Later, Spanish California (1769-1821) would influence the region with the establishment of both missions and large ranchos.",
            stats: { avgPrice: "$420k", walkScore: 62, popularity: "Medium" }
        },
        {
            id: 32,
            name: "Lakewood",
            category: "Los Angeles",
            image: "/Whittier.jpg",
            description: "The City of Whittier has a diverse and colorful history beginning with the Gabrielino Indians who first inhabited the area during the City’s pre-history. Later, Spanish California (1769-1821) would influence the region with the establishment of both missions and large ranchos.",
            stats: { avgPrice: "$420k", walkScore: 62, popularity: "Medium" }
        },
        {
            id: 33,
            name: "Diamond Bar",
            category: "Los Angeles",
            image: "/diamond.jpg",
            description: " Diamond Bar is primarily residential with shopping centers interspersed throughout the city. It is surrounded by the cities of Brea, Walnut, Chino Hills, Pomona, City of Industry, and the unincorporated areas of Rowland Heights and South Diamond Bar.",
            stats: { avgPrice: "$420k", walkScore: 62, popularity: "Medium" }
        },
        {
            id: 34,
            name: "Corona",
            category: "Riverside",
            image: "/corona.jpg",
            description: " Corona, located along the western edge of Southern California's Inland Empire region, is known as the Circle City due to Grand Boulevard's 3 mi (4.8 km) circular layout. It is one of the most residential cities in the Inland Empire, but also has a large industrial portion on the northern half, being the headquarters of companies such as Fender Musical Instruments Corporation, Monster Beverage Corporation, and supercar manufacturer Saleen.",
            stats: { avgPrice: "$420k", walkScore: 62, popularity: "Medium" }
        },
        {
            id: 35,
            name: "Desert Hot Springs",
            category: "Riverside",
            image: "/desert.jpg",
            description: " It is named for its many natural hot springs.It is one of several places in the world with naturally occurring hot and cold mineral springs.  More than 20 natural mineral spring lodgings can be found in town.[9] Unlike hot springs with high sulfur content, the mineral springs in town are odorless.",
            stats: { avgPrice: "$420k", walkScore: 62, popularity: "Medium" }
        },
        {
            id: 36,
            name: "Eastvale",
            category: "Riverside",
            image: "/eastvale.jpg",
            description: "City boundaries extend from Hellman Avenue to the west (the San Bernardino County line), State Route 60 to the north (also the San Bernardino County line), the Santa Ana River and Norco to the south, and Interstate 15 to the east. It is surrounded by the cities of Chino, Ontario, Jurupa Valley, Norco, and Corona.",
            stats: { avgPrice: "$420k", walkScore: 62, popularity: "Medium" }
        },
        {
            id: 37,
            name: "Hemet",
            category: "Riverside",
            image: "/hemet.jpg",
            description: "The founding of Hemet, initially called South San Jacinto, predates the formation of Riverside County. This area was then still part of San Diego County.The formation of Lake Hemet helped the city to grow and stimulated agriculture in the area.The city is known for being the home of The Ramona Pageant, California's official outdoor play, set in the Spanish colonial era.Started in 1923, the play is one of the longest-running outdoor plays in the United States.",
            stats: { avgPrice: "$420k", walkScore: 62, popularity: "Medium" }
        },
        {
            id: 38,
            name: "Jurupa Valley",
            category: "Riverside",
            image: "/jurupa.jpg",
            description: "The city of Jurupa Valley covers approximately 43.5 square miles (113 km2), and had a population of 105,053 as of the 2020 census. It is bordered by the cities of Eastvale, Norco, and Riverside in Riverside County and the cities of Ontario, Fontana, Rialto, Bloomington and Colton in neighboring San Bernardino County.",
            stats: { avgPrice: "$420k", walkScore: 62, popularity: "Medium" }
        },
        {
            id: 39,
            name: "Lake Elsinore",
            category: "Riverside",
            image: "/lake.jpg",
            description: "Established as a city in 1888, it is on the shore of Lake Elsinore, a natural freshwater lake about 3,000 acres (1,200 ha) in size. The city has grown from a small resort town in the late 19th and early 20th centuries to a suburban city with over 70,000 residents.",
            stats: { avgPrice: "$420k", walkScore: 62, popularity: "Medium" }
        },
        {
            id: 40,
            name: "Menifee",
            category: "Riverside",
            image: "/Menifee.jpg",
            description: "Menifee is a city in Riverside County, California, United States, and is part of the Inland Empire. Named after a local miner, Luther Menifee Wilson, it was settled in the 19th century, and incorporated as a city in 2008. Since then, Menifee has become one of the fastest growing cities in California and the United States.The city is centrally located in Southern California in the Menifee Valley. It is almost 15 miles (24 km) north of Temecula and just north of Murrieta. Menifee is roughly 46 square miles (100 km2) in size and has an elevation of 1,424 feet (434 m). The incorporated City of Menifee includes the communities of Sun City, Quail Valley, and Romoland.",
            stats: { avgPrice: "$420k", walkScore: 62, popularity: "Medium" }
        },
        {
            id: 41,
            name: "Moreno Valley",
            category: "Riverside",
            image: "/moreno.jpg",
            description: "Moreno Valley is a city in Riverside County, California, United States, and is part of the Riverside–San Bernardino–Ontario metropolitan area. It is the second-largest city in Riverside County by population and one of the Inland Empire 's population centers.",
            stats: { avgPrice: "$420k", walkScore: 62, popularity: "Medium" }
        },
        {
            id: 42,
            name: "Murrieta",
            category: "Riverside",
            image: "/Murrieta.jpg",
            description: "The most populous city in Riverside County, California. It is located in the Inland Empire region of California. Murrieta is known for its many parks and green spaces, its many historical sites, and its many attractions, such as the Murrieta Hot Springs and the Murrieta Museum.",
            stats: { avgPrice: "$420k", walkScore: 62, popularity: "Medium" }
        },
        {
            id: 43,
            name: "Perris",
            category: "Riverside",
            image: "/Perris.jpg",
            description: "Perris is an old railway city in Riverside County, California, United States, located 71 miles (114 km) east-southeast of Los Angeles and 81 miles (130 km) north of San Diego. It is known for Lake Perris, skydiving, the Southern California Railway Museum, and its sunny dry climate. Perris is within the Inland Empire metropolitan area of Southern California. Perris had a population of 78,700 as of the 2020 census.",
            stats: { avgPrice: "$420k", walkScore: 62, popularity: "Medium" }
        }, //San Jacinto
        {
            id: 44,
            name: "San Jacinto",
            category: "Riverside",
            image: "/San Jacinto.jpg",
            description: "The city was founded in 1870 and incorporated on April 20, 1888,making it one of the oldest cities in Riverside County. The city is home to Mt. San Jacinto College, a community college founded in 1965. The college is named after the nearby San Jacinto Mountains, which are visible from many parts of the city.",
            stats: { avgPrice: "$420k", walkScore: 62, popularity: "Medium" }
        }, //Temecula
        {
            id: 45,
            name: "Temecula",
            category: "Riverside",
            image: "/Temecula.jpg",
            description: "The city of Temecula, forming the southwestern anchor of the Inland Empire region, is approximately 58 miles (93 km) north of downtown San Diego and 85 miles (137 km) southeast of downtown Los Angeles. Temecula is part of the Greater Los Angeles area. Temecula is bordered by the city of Murrieta to the north and the Pechanga Indian Reservation and San Diego County to the south",
            stats: { avgPrice: "$420k", walkScore: 62, popularity: "Medium" }
        }, //Temecula
        {
            id: 46,
            name: "Apple Valley",
            category: "San Bernardino",
            image: "/apple.jpg",
            description: "It is located in the southern suburbs of Minneapolis. Apple Valley is known for its many parks and green spaces, its many historical sites, and its many attractions, such as the Apple Valley City Hall and the Apple Valley Historical Society. with a population of 54,847 people.",
            stats: { avgPrice: "$420k", walkScore: 62, popularity: "Medium" }
        }, 
        {
            id: 47,
            name: "Chino",
            category: "San Bernardino",
            image: "/chino.jpg",
            description: "Chino's surroundings have long been a center of agriculture and dairy farming, providing milk products in Southern California and much of the southwestern United States. Chino's agricultural history dates back to the Spanish land grant forming Rancho Santa Ana del Chino. The area specialized in fruit orchards, row crops, and dairy.",
            stats: { avgPrice: "$420k", walkScore: 62, popularity: "Medium" }
        }, 
        {
            id: 48,
            name: "Chino Hills",
            category: "San Bernardino",
            image: "/hills.jpg",
            description: "Chino Hills also includes the developed golf course development neighborhood of Los Serranos. Other large master-planned subdivisions without amenities include Woodview/Village Crossing, Gordon Ranch, LaBand Village, Butterfield Ranch,[12] Rolling Ridge, Fairfield Ranch, and Payne Ranch.",
            stats: { avgPrice: "$420k", walkScore: 62, popularity: "Medium" }
        },
        {
            id: 49,
            name: "Rancho Cucamonga ",
            category: "San Bernardino",
            image: "/monga.jpg",
            description: "Rancho Cucamonga is a city located just south of the foothills of the San Gabriel Mountains and Angeles National Forest in San Bernardino County, California, United States. About 37 mi (60 km) east of Downtown Los Angeles, Rancho Cucamonga is the 28th most populous city in California.",
            stats: { avgPrice: "$420k", walkScore: 62, popularity: "Medium" }
        }, 
        //Menifee is a city in Riverside County, California, United States, and is part of the Inland Empire. Named after a local miner, Luther Menifee Wilson, it was settled in the 19th century, and incorporated as a city in 2008. Since then, Menifee has become one of the fastest growing cities in California and the United States.The city is centrally located in Southern California in the Menifee Valley. It is almost 15 miles (24 km) north of Temecula and just north of Murrieta. Menifee is roughly 46 square miles (100 km2) in size and has an elevation of 1,424 feet (434 m). The incorporated City of Menifee includes the communities of Sun City, Quail Valley, and Romoland.
    ];

    useEffect(() => {
        setIsAnimating(true);
        const filtered = activeCategory === "All"
            ? areaData
            : areaData.filter(item => item.category == activeCategory);

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
        <div className="py-16 px-4 sm:px-6 md:px-8 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto ">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-[#34495E] inline-block">
                        Explore Featured Areas
                        <div className=" h-1 w-24 bg-[#3498DB] bottom-0 ml-40 md:ml-50 transform -translate-x-1/2 mt-2"></div>
                    </h3>
                    <p className="text-gray-600 max-w-2xl md:mx-0  mx-12 md:ml-30 lg:ml-40 xl:ml-85">
                        Discover your dream home in our handpicked selection of exceptional neighborhoods,
                        where community spirit meets modern living in the Phoenix metropolitan area.
                    </p>
                </div>

                {/* Category Navigation */}
                {/* <div className="flex justify-center mb-10  w-full ">
                    <div className="w-full max-w-full p-1 bg-gray-100 rounded-full shadow-md overflow-x-scroll whitespace-nowrap">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => handleCategoryChange(category)}
                                className={`px-6 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${activeCategory === category
                                        ? "bg-blue-500 text-white shadow-lg"
                                        : "text-gray-700 hover:bg-gray-200"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div> */}
                <div className="flex justify-center mb-10 w-full lg:ml-50 xl:ml-85">
    <div className="w-[80vw] max-w-[90vw] overflow-x-auto pb-2 -mx-2 px-2"> 
        <div className="inline-flex p-1 bg-gray-100 rounded-full shadow-md min-w-max">
            {categories.map(category => (
                <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`px-6 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${
                        activeCategory === category
                            ? "bg-blue-500 text-white shadow-lg"
                            : "text-gray-700 hover:bg-gray-200"
                    }`}
                >
                    {category}
                </button>
            ))}
        </div>
    </div>
</div>

                {/* Area Cards Grid */}
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity md:mx-0 mx-10 duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
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
                                    {/* <div className="text-gray-500 text-sm">Avg Price: {area.stats.avgPrice}</div> */}
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

                            {/* <div className="grid grid-cols-3 gap-4 mb-8">
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
                            </div> */}

                            {/* <div className="space-y-6">
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
                            </div> */}

                            {/* <button className="mt-8 w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg transition-colors font-medium">
                                View Properties in {selectedArea.name}
                            </button> */}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FeaturedAreas;