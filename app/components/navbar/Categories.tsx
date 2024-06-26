import Container from "../Container";
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { GiBarn, GiBoatFishing, GiCactus, GiCastle, GiCaveEntrance, GiForestCamp, GiGrapes, GiIsland, GiTreehouse, GiWhiteTower, GiWindmill } from 'react-icons/gi';
import { MdOutlineSportsGolf, MdOutlineSurfing, MdOutlineVilla } from 'react-icons/md';
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";
import { FaShuttleVan, FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineHouseboat } from "react-icons/md"

export const categories = [
    {
        label: 'Beach',
        icon: TbBeach,
        description: 'This property is close to the beach!'
    },
    {
        label: 'Windmills',
        icon: GiWindmill,
        description: 'This property has windmills!'
    },
    {
        label: 'Modern',
        icon: MdOutlineVilla,
        description: 'This property is modern!'
    },
    {
        label: 'Countryside',
        icon: TbMountain,
        description: 'This property is in the countryside!'
    },
    {
        label: 'Pools',
        icon: TbPool,
        description: 'This property has a pool!'
    },
    {
        label: 'Islands',
        icon: GiIsland,
        description: 'This property is on an island!'
    },
    {
        label: 'Lake',
        icon: GiBoatFishing,
        description: 'This property is close to a lake!'
    },
    {
        label: 'Skiing',
        icon: FaSkiing,
        description: 'This property has skiing activities!'
    },
    {
        label: 'Castles',
        icon: GiCastle,
        description: 'This property is in a castle!'
    },
    {
        label: 'Camping',
        icon: GiForestCamp,
        description: 'This property has camping activities!'
    },
    {
        label: 'Arctic',
        icon: BsSnow,
        description: 'This property is in a snowy region!'
    },
    {
        label: 'Cave',
        icon: GiCaveEntrance,
        description: 'This property is in a cave!'
    },
    {
        label: 'Boathouses',
        icon: MdOutlineHouseboat,
        description: 'This property is a boathouse!'
    },
    {
        label: 'Desert',
        icon: GiCactus,
        description: 'This property is in a desert!'
    },
    {
        label: 'Barns',
        icon: GiBarn,
        description: 'This property is in a barn!'
    },
    {
        label: 'Treehouses',
        icon: GiTreehouse,
        description: 'This property is a treehouse!'
    },
    {
        label: 'Towers',
        icon: GiWhiteTower,
        description: 'This property is a tower!'
    },
    {
        label: 'Vans',
        icon: FaShuttleVan,
        description: 'This property is a camper van!'
    },
    {
        label: 'Surfing',
        icon: MdOutlineSurfing,
        description: 'This property has surfing activities!'
    },
    {
        label: 'Golfing',
        icon: MdOutlineSportsGolf,
        description: 'This property has golfing activities!'
    },
    {
        label: 'Vineyards',
        icon: GiGrapes,
        description: 'This property is located near a vineyard!'
    },
    {
        label: 'Lux',
        icon: IoDiamond,
        description: 'This property is luxurious!'
    },
]

const Categories = () => {
    const params = useSearchParams();
    const category = params?.get('category');
    const pathname = usePathname();

    const isMainPage = pathname == '/';
    if(!isMainPage) {
        return null;
    }
    return (
        <Container>
            <div className="
                pt-2
                flex
                flex-row
                items-center
                justify-between
                overflow-x-auto
                gap-3
                md:gap-0"
            >
                {categories.map((item) => (
                    <CategoryBox 
                        key={item.label}
                        label={item.label}
                        selected={category == item.label}
                        icon={item.icon}
                    />
                ))}
            </div>
        </Container>
    );
}

export default Categories;