interface HomeHouseCardProps {
    heading: string,
    desc: string
}

export default function HomeHouseCard({ heading, desc }: HomeHouseCardProps) {
    return(
        <div className="w-full p-5 flex flex-col items-center gap-5 rounded-xl bg-black border border-green-color">
            <h3 className="capitalize">{heading}</h3>
            <p className="text-justify">{desc}</p>
        </div>
    )
}