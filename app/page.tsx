import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Badge>Join the community to learn from creations!</Badge>
      
      <h1>You're creations needs the perfect audience, Discover other creations</h1>
      <p>
        Showcase your programming creations, discover others’ work, and let the community decide with likes and dislikes.
      </p>
      <Button>Share your projects</Button>
      <Button>Explore other projects</Button>

    </div>


  );
}
