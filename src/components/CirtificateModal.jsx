



const CertificateModal = ({ isOpen, onClose, pdfUrl, title }) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            onClick={onClose}
        >
            <div
                className="relative bg-white dark:bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 text-2xl leading-none"
                    >
                        &times;
                    </button>
                </div>
                <div className="p-4 h-[70vh]">
                    <iframe
                        src={`${pdfUrl}`}
                        title={title}
                        className="w-full h-full rounded border border-gray-200 dark:border-gray-700"
                    />
                </div>
                <div className="p-4 border-t border-gray-200 dark:border-gray-700 text-right">
                    <a
                        href={pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-500 hover:underline text-sm"
                    >
                        Open in new tab →
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CertificateModal;