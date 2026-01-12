import { RocketIcon, Section } from "lucide-react";
import SectionHeader from "../common/section-header";

export default function RecentlyLaunchedProducts() {
    const recentlyLauncedCreations = [
        {
            id: 1,
            name: "Smart Home Hub",
            description: "Control all your smart devices from a single interface.",
            tags: ["iot", "home automation", "javascript"],
            votes: 12,
            isFeatured: true,
        },
        {
            id: 2,
            name: "Fitness Tracker App",
            description: "Track your workouts and monitor your health metrics.",
            tags: ["react", "mobile", "health"],
            votes: 20,
            isFeatured: true,
        },
        {
            id: 3,
            name: "Recipe Sharing Platform",
            description: "Share and discover new recipes from around the world.",
            tags: ["typescript", "social", "frontend"],
            votes: 30,
            isFeatured: true,
        },
        {
            id: 4,
            name: "Virtual Event Organizer",
            description: "Plan and host virtual events with ease.",
            tags: ["fullstack", "events", "backend"],
            votes: 25,
            isFeatured: false,
        }
    ]
    return(
        <>
            <section className="py-20 bg-muted/20">
                <div className="wrapper">
                    <SectionHeader 
                        title="Recently Launced Creations"
                        icon={RocketIcon}
                        description="Discover Latest Creations"

                    />
                </div>
            </section>
        </>
    )
}