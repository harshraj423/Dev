export default function ContentCard({ img, title, des }) {
    return (
        <div className="pl-8 flex justify-start items-center">
            <img src={img} className="rounded-md h-40 w-70 object-cover" alt={title} />
            <div className="ml-4">
                <div className="font-bold text-xl">{title}</div>
                <div className="text-md text-gray-500">{des}</div>
            </div>
        </div>
    );
}