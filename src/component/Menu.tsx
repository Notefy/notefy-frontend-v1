import { useState } from "react";

export interface MenuProps {
    items: React.ReactNode;
    selector: React.ReactNode;
}

const Menu = ({ items, selector }: MenuProps) => {
    const [showSelect, setShowSelect] = useState(false);
    return (
        <div className="relative inline-block text-left z-40">
            {selector}
            {showSelect && { items }}
        </div>
    );
};

export default Menu;
