import { Upload, FileSearch } from "lucide-react";

function UploadCard() {
    return (
        <div className="group rounded-2xl border border-cyan-500/10 bg-slate-900/60 p-6 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-cyan-900/20">

            {/* Header */}
            <div className="mb-5 flex items-center justify-between">

                <div>
                    <h2 className="text-lg font-semibold text-white">
                        File Upload
                    </h2>

                    <p className="mt-1 text-sm text-slate-400">
                        Scan a suspicious file
                    </p>
                </div>

                <div className="rounded-xl border border-cyan-500/10 bg-cyan-500/10 p-3 text-cyan-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-cyan-500/20">
                    <FileSearch size={24} />
                </div>

            </div>

            {/* Upload Area */}
            <div className="cursor-pointer rounded-2xl border-2 border-dashed border-slate-700 bg-slate-950/30 p-8 text-center transition-all duration-300 hover:border-cyan-500/40 hover:bg-cyan-500/[0.03]">

                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                    <Upload size={24} />
                </div>

                <p className="font-medium text-slate-300">
                    Upload a file for scanning
                </p>

                <p className="mt-1 text-xs text-slate-500">
                    Drag & drop or click to browse
                </p>

                <button className="mt-5 rounded-xl border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300 transition-all duration-300 hover:bg-cyan-500/20 hover:text-cyan-200">
                    Choose File
                </button>

            </div>

        </div>
    );
}

export default UploadCard;