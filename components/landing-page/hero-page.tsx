import { Link } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const LiveBadge = () => {
  return(
     <Badge variant={'outline'} className="px-4 py-2 mb-8 text-sm backdrop-blur-sm">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary  opacity-75 "></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary "></span>
      </span>
      <span className="text-muted-foreground">Join the community to learn from creations!</span>
      </Badge>
  )
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-background via-background to-muted/20 ">
      <div className="wrapper">
        <div className="flex flex-col items-center justify-center lg:py-24 py-12 ">
          <LiveBadge/>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-5xl">You're creations needs the perfect audience, Discover other creations</h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            Showcase your programming creations, discover others’ work, and let the community decide with likes and dislikes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12 ">
            <Button asChild size="lg" className="text-base px-8 shadow-lg"><Link href="/projects">Share your projects</Link></Button>
            <Button asChild size="lg" className="text-base px-8 shadow-lg"><Link href="/explore">Explore other projects</Link></Button>  
          </div>
          
          
        </div>
      </div>
    </section>

  );
}