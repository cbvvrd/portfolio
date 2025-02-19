

function Footer() {
    return (
        <footer className="bg-teal-500 font-questrial py-3 scroll-mt-20 md:py-6">
            <div className="flex justify-between px-4 md:px-8">
            <p>&copy; Charlie Bird 2025</p>
            <p  onClick={() => window.scrollTo({ top: 0, left: 0 })} className="underline underline-offset-2">Top</p>
            </div>
        </footer>
    )
}

export default Footer