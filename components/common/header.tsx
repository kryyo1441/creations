import { HandMetal, HomeIcon, Rocket, SparklesIcon, UserIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"


const Logo = () => {
    return(
        <Link href="/" className="flex items-center gap-2 group">
            <div className="size-8 rounded-lg bg-primary flex items-center justify-center">
                <HandMetal/>
            </div>
                <span className="text-xl font-bold">
                    Creationz
                </span>
        </Link>
    )
}

export default function Header(){
    const isSignedin = true;
    return(
        <header className="sticky top-0 z-50 border-b border-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
            <div className="wrapper px-12 ">
                <div className="flex h-15 items-center justify-between">
                <Logo></Logo>
                <nav className="flex items-center gap-1">
                    <Link href="/" className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover:bg-muted/50">
                        <HomeIcon className="size-4"></HomeIcon>
                        <span>Home</span>
                    </Link>
                    <Link href="/" className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover:bg-muted/50">
                        <Rocket className="size-4"></Rocket>
                        <span>Explore</span>
                    </Link>
                    <div className="flex items-center gap-4">
                        {isSignedin ? (
                            <>
                                <Button asChild>
                                    <Link href="/submit">
                                        <SparklesIcon className="size-4"/>
                                        <span>Submit Creation</span>
                                    </Link>
                                </Button>
                                <Button variant="ghost"><UserIcon className="size-4"></UserIcon></Button>
                            </>
                        ) : (
                            <>
                                <Button variant="ghost">Sign in</Button>
                                <Button>Sign up</Button>
                            </>
                        )}
                    </div>
                </nav>
                </div>
            </div>
        </header>
    )
}