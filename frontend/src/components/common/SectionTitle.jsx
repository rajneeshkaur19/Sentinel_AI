export default function SectionTitle({
    title,
    subtitle,
    className = "",
}) {
    return(
        <div className = {`mb-6 $ {className}`}>
            <h2 className = "text-2xl font-bold tracking-tight text-white">
                {title}
            </h2>
            {subtitle && (
                <p className = "mt-2 text-sm text-slate-400">
                    {subtitle}
                </p>
            )}
        </div>
    );
}