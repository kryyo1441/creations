import { LucideIcon } from "lucide-react";

export default function EmptyState({
    message,
    icon: Icon,
}:{
    message: string;
    icon?: LucideIcon;
}
){
    return(
        <div className="empty-state">
            {Icon && (<Icon className="size-10 text-muted-foreground/50 mx-auto mb-4"/>)}
            <p className="text-lg font-medium">{message}</p>
        </div>
    )
    
}