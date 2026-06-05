import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    const year = new Date().getFullYear();

    return(
        <footer className="bg-black w-full px-[5vw] py-10 flex flex-col gap-15 items-center justify-between">
            <div className="w-full flex flex-col md:flex-row gap-15 items-center justify-between">
                <div className="w-full flex items-center justify-center gap-10">
                    <Image 
                        src="/logo.png"
                        alt="tacticalttt logo"
                        width={165} height={165}
                        className="rounded-xl bg-white w-30 md:w-41.25"
                    />

                    <Image 
                        src="/ttt-proizvodnjaa.png"
                        alt="ttt proizvodnja logo"
                        width={200} height={200}
                        className="rounded-xl w-40 md:w-50"
                    />
                </div>

                <div className="flex flex-col items-center gap-5 w-full">
                    <div className="flex flex-col items-center gap-5">
                        <Link href="mailto:office@gvozdenizmaj.com" className="flex items-center gap-2">
                            <Mail size={18} className="text-accent" aria-hidden="true" />
                            <span>office@tacticalttt.com</span>
                        </Link>
                        <Link href="tel:+381600727032" className="flex items-center gap-2">
                            <Phone size={18} className="text-accent" aria-hidden="true" />
                            <span>+381600727032</span>
                        </Link>
                    </div>
                </div>

                <div className="w-full flex items-center justify-center gap-10">
                    <Image 
                        src="/ttt-cpr.png"
                        alt="ttt cpr logo"
                        width={180} height={180}
                        className="rounded-xl w-35 md:w-45"
                    />

                    <Image 
                        src="/ttt-emergency.png"
                        alt="ttt emergency logo"
                        width={190} height={190}
                        className="rounded-xl w-37.5 md:w-47.5"
                    />
                </div>
            </div>

            <div className="flex items-center justify-center">
                © {year} Tactical Training Team. Sva prava zadrzana.
            </div>
        </footer>
    )
}