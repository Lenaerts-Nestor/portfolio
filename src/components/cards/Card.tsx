// src/components/Card.tsx
import React from "react";

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
    return (
        <div
            className={`bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all duration-300 ${className}`}
        >
            {children}
        </div>
    );
};

export default Card;