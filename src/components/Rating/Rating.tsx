import { FaStar } from "react-icons/fa6";

function Rating(props: { rating: number }) {
    return (
        <div style={{ display: "flex" }}>
            {Array.from({ length: props.rating }, (_, index) => (
                <FaStar
                    key={index}
                    color={"#ffc107"}
                />
            ))}
        </div>
    );
}

export default Rating;
