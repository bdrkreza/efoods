import TopBar from "./TopBar";
import TopSearchBar from "./TopSearchBar";
import "./Header.scss"

export default function Header() {
    return (
        <>
            <div className="fixed-top">
                <TopBar />
                <TopSearchBar />
            </div>
        </>
    )
}
