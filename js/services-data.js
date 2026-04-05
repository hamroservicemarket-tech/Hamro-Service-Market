/**
 * Hamro Service Market - Service Data
 * Sourced from: Namaste_Nepal_Cleaning_All_Details (1).txt
 */

const servicesData = [
    // --- Featured / Popular Services (Top 6) ---
    {
        id: 'whole-house-deep',
        title: 'Whole House Deep Cleaning',
        price: 'Starts Rs. 15,000',
        description: 'Comprehensive deep cleaning for 1 to 5+ storey houses. Includes floors, tanks, kitchen, bathrooms, and more.',
        image: 'stock_image/house deep cleaning services.jpg',
        details: {
            includes: [
                'Floors, stairs, balcony, terrace, parking',
                'Water tank, kitchen, bathrooms',
                'Dusting and mopping',
                'Quality-focused supervision'
            ],
            notes: 'Excludes sofa, mattress, curtains, rugs, carpets, chimney. Window cleaning w/o rope included.',
            terms: 'VAT excluded. Rates negotiable. Rope access extra.'
        }
    },
    {
        id: 'sofa-cleaning',
        title: 'Sofa Cleaning',
        price: 'Rs. 500 per seat',
        description: 'Deep shampooing and vacuuming to restore your sofa\'s freshness.',
        image: 'stock_image/sofa cleaning services.jpg',
        details: {
            includes: [
                'Shampooing',
                'Vacuum extraction',
                'Stain treatment'
            ],
            notes: 'Minimum charge NPR 1,500.',
            terms: 'Free pickup only for rugs (not sofas). Chemicals included.'
        }
    },
    {
        id: 'water-tank',
        title: 'Water Tank Cleaning',
        price: 'Rs. 0.5 - 1 / ltr',
        description: 'Professional cleaning for roof and underground water tanks.',
        image: 'stock_image/water tank cleaning services.jpg',
        details: {
            includes: [
                'Sludge removal',
                'Scrubbing and disinfection',
                'High-pressure wash'
            ],
            notes: 'Roof tank: Rs 1/ltr. Underground: Rs 0.5/ltr.',
            terms: 'Minimum charge NPR 3,500 applies.'
        }
    },
    {
        id: 'carpet-cleaning',
        title: 'Carpet Cleaning',
        price: 'Starts Rs. 15 / sq.ft',
        description: 'Expert cleaning for floor carpets and Galaichas.',
        image: 'stock_image/carpet cleaning service.jpg',
        details: {
            includes: [
                'Dust removal',
                'Shampooing',
                'Drying'
            ],
            notes: 'Floor carpet: Rs 15/sq.ft. Nepali Galaicha: Rs 50/sq.ft. Belgium: Rs 45/sq.ft.',
            terms: 'Minimum NPR 3,500. Free pickup/delivery for Galaichas.'
        }
    },
    {
        id: 'kitchen-deep',
        title: 'Kitchen Deep Cleaning',
        price: 'Rs. 3,500',
        description: 'Intense cleaning for your kitchen, removal of grease and grime.',
        image: 'stock_image/kitchen cleaning services.jpg',
        details: {
            includes: [
                'Oil and grease removal',
                'Surface scrubbing',
                'Cabinet exterior cleaning'
            ],
            notes: 'Chimney cleaning charged separately (Rs 3,000–5,000).',
            terms: 'Dining chair cleaning: Rs 400/ea. Min charge logic applies.'
        }
    },
    {
        id: 'bathroom-cleaning',
        title: 'Bathroom Cleaning',
        price: 'Starts Rs. 2,000',
        description: 'Standard and deep cleaning options for hygienic bathrooms.',
        image: 'stock_image/tile cleaning services.jpg',
        details: {
            includes: [
                'Tile scrubbing',
                'Sanitization',
                'Fixtures polishing'
            ],
            notes: 'Standard: Rs 2,000. Deep: Rs 3,000.',
            terms: 'Prices per bathroom. VAT excluded.'
        }
    },

    // --- Other Services (Revealed by "Explore More") ---
    {
        id: 'housekeeping',
        title: 'Housekeeping (Maid) Service',
        price: 'Starts Rs. 6,000',
        description: 'Hourly housekeeping services with or without chemicals.',
        image: 'stock_image/apartment cleaning services.jpg',
        details: {
            includes: [
                'Uniformed, ID-card holding staff',
                'Guaranteed replacement for absentees',
                'Flexible hours (1-12 hours)'
            ],
            notes: 'Cooking charges extra. Rates vary by hours & chemical usage.',
            terms: 'VAT 13% excluded.'
        }
    },
    {
        id: 'bungalow-cleaning',
        title: 'Bungalow Deep Cleaning',
        price: 'Starts Rs. 35,000',
        description: 'Specialized deep cleaning for larger bungalows (2.5 to 4 floors).',
        image: 'stock_image/house deep cleaning services.jpg',
        details: {
            includes: [
                'Full property deep cleaning',
                'Parking and compound areas',
                'High-end supervision'
            ],
            notes: 'Rates range from Rs 35,000 to Rs 80,000 based on condition/size.',
            terms: 'Old/Living vs New/Empty rates differ.'
        }
    },
    {
        id: 'marble-polish',
        title: 'Marble & Parquet Polishing',
        price: 'Starts Rs. 15 / sq.ft',
        description: 'Restore the shine of marble, tile, granite, or parquet floors.',
        image: 'stock_image/marble cleaning services.jpg',
        details: {
            includes: [
                'Cleaning (Rs 15/sq.ft)',
                'Polishing (Marble: Rs 65/sq.ft | Parquet: Rs 80-120/sq.ft)'
            ],
            notes: 'Parquet polishing is Rs 80-120/sq.ft.',
            terms: 'Min charge NPR 3,500. VAT excluded.'
        }
    },
    {
        id: 'window-cleaning',
        title: 'Window Glass Cleaning',
        price: 'Starts Rs. 15 / sq.ft',
        description: 'Crystal clear window cleaning services.',
        image: 'stock_image/apartment cleaning services.jpg',
        details: {
            includes: [
                'Interior cleaning (Rs 15/sq.ft)',
                'Exterior cleaning (On Estimate)'
            ],
            notes: 'Manual cleaning included.',
            terms: 'Rope access cleaning incurs additional charges.'
        }
    },
    {
        id: 'room-cleaning',
        title: 'Room Cleaning (General & Deep)',
        price: 'Starts Rs. 5,500',
        description: 'Full flat/room cleaning from 1 BHK to 5 BHK.',
        image: 'stock_image/room cleaning services.jpg',
        details: {
            includes: [
                'General cleaning options',
                'Deep cleaning options'
            ],
            notes: 'General starts @ Rs 5,500 (1BHK). Deep starts @ Rs 12,000 (1BHK).',
            terms: 'Price increases with number of rooms.'
        }
    },
    {
        id: 'mattress-cleaning',
        title: 'Mattress Cleaning',
        price: 'Starts Rs. 2,000',
        description: 'Hygienic cleaning for single and double mattresses.',
        image: 'stock_image/sofa cleaning services.jpg', // Reusing sofa image as relevant soft furnishing
        details: {
            includes: [
                'Dust extraction',
                'Cleaning treatment'
            ],
            notes: 'Single: Rs 2,000. Double: Rs 3,500.',
            terms: 'Min charge NPR 3,500 applies if ordered alone.'
        }
    },
    {
        id: 'pigeon-control',
        title: 'Bird Spikes & Pigeon Nets',
        price: 'Rs. 75 - 95 / sq.ft',
        description: 'Protect your balcony and windows from birds.',
        image: 'stock_image/bird spikes services.jpg',
        details: {
            includes: [
                'Nets (Rs 75-95/sq.ft)',
                'Spikes (Rs 425-550/running ft)'
            ],
            notes: 'High quality materials used.',
            terms: 'Installation charges included in rate.'
        }
    },
    {
        id: 'painting',
        title: 'Painting Services',
        price: 'On Estimate',
        description: 'Professional interior and exterior painting.',
        image: 'stock_image/painting services.jpg',
        details: {
            includes: [
                'Site inspection',
                'Material & Labor options'
            ],
            notes: 'Quote provided upon inspection.',
            terms: 'Varies by paint type and area.'
        }
    },
    {
        id: 'pest-control',
        title: 'Pest Control & Disinfection',
        price: 'Starts Rs. 3,500',
        description: 'Effective treatment against pests and bugs.',
        image: 'stock_image/kitchen cleaning services.jpg', // Reusing kitchen as pest hotspot
        details: {
            includes: [
                'Spraying/Gel treatment',
                'Disinfection'
            ],
            notes: 'Starting price is Rs 3,500.',
            terms: 'Commercial areas require inspection.'
        }
    },
    {
        id: 'vehicle-clean',
        title: 'Vehicle Cleaning',
        price: 'Starts Rs. 3,500',
        description: 'Deep cleaning for Cars and Buses.',
        image: 'stock_image/underground water tank cleaning services.jpg', // Fallback
        details: {
            includes: [
                'Interior vacuuming',
                'Seat cleaning',
                'Exterior wash'
            ],
            notes: 'Car: Rs 3,500–6,000. Bus: Rs 7,000–12,000.',
            terms: 'Min charge NPR 3,500.'
        }
    },
    {
        id: 'solar-heater',
        title: 'Solar Water Heater',
        price: 'Starts Rs. 250 / tube',
        description: 'Cleaning and maintenance of solar water heating systems.',
        image: 'stock_image/solar water heater cleaning services.jpg',
        details: {
            includes: [
                'Tube cleaning (Rs 250-300)',
                'Panel cleaning (Rs 2,000)'
            ],
            notes: 'Essential for maintaining heating efficiency.',
            terms: 'Spare parts charged extra.'
        }
    },
    {
        id: 'water-filter',
        title: 'Water Vessel Filter',
        price: 'Starts Rs. 15,000',
        description: 'Cleaning and fitting of large water vessel filters.',
        image: 'stock_image/water tank cleaning services.jpg',
        details: {
            includes: [
                'Cleaning: Rs 15k-45k',
                'Fitting: Rs 33k-65k'
            ],
            notes: 'For heavy duty industrial/commercial filters.',
            terms: 'Site inspection recommended.'
        }
    },
    {
        id: 'borewell',
        title: 'Borewell Drilling',
        price: 'Rs. 600 per ft',
        description: 'Professional borewell drilling services.',
        image: 'stock_image/underground water tank cleaning services.jpg',
        details: {
            includes: [
                'Drilling labor',
                'Equipment'
            ],
            notes: 'Rate is per foot of depth.',
            terms: 'Casing pipe and other materials extra.'
        }
    }
];
