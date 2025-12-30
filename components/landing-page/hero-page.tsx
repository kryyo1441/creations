import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const LiveBadge = () => {
  return(
     <Badge variant={'outline'} className="px-4 py-2 mb-8 text-sm backdrop-blur-sm">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary  opacity-75 "></span>
      </span>
      Join the community to learn from creations!</Badge>
  )
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-background via-background to-muted/20 ">
      <div className="wrapper">
        <div className="flex flex-col items-center justify-center lg:py-24 py-12 ">
          <LiveBadge/>
          <h1>You're creations needs the perfect audience, Discover other creations</h1>
          <p>
            Showcase your programming creations, discover others’ work, and let the community decide with likes and dislikes.
          </p>
          <Button>Share your projects</Button>
          <Button>Explore other projects</Button>
        </div>
      </div>
    </section>

  );
}