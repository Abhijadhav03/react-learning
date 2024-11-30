const ShimmerCard = () => {
    return (
        <div className="shimmer-card">
            {/* Shimmer for image */}
            <div className="shimmer-img"></div>
            {/* Shimmer for text lines */}
            <div className="shimmer-line shimmer-title"></div>
            <div className="shimmer-line"></div>
            <div className="shimmer-line"></div>
            <div className="shimmer-line"></div>
        </div>
    );
};

export default ShimmerCard;
