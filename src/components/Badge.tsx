interface BadgeProps {
    text: string;
}

const Badge: React.FC<BadgeProps> = ({ text }) => {
    return (
        <div className="badge">
            {text}
        </div>
    );
};

export default Badge;