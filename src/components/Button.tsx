import React from "react";

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, className, onClick }) => {
    return (
        <button
            className={`inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg transition-colors ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;