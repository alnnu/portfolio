// @ts-ignore
export default function TechCard({ techName, techSvg }) {
    return (
        <div>
            <div className="card w-32">
                <figure>
                    <svg viewBox="0 0 128 128" height="50" width="50">
                        <path fillRule="evenodd" clipRule="evenodd"  d={techSvg} fill="#4D4D4D"></path>
                    </svg>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{techName}</h2>
                </div>
            </div>
        </div>
    )
}