type BadgesProps = {
    titulo: string;
    icon: React.ReactNode;
    className?: string;
}

export function Badges({titulo, icon, className}: BadgesProps){
    return (
        <div className={`flex justify-center items-center gap-2 bg-white text-black/80 dark:bg-gray-900  dark:text-white p-4 rounded-lg shadow-lg ${className}`}>
            {icon}
            <h3 className="text-xs font-semibold">{titulo}</h3>
        </div>
    )
}