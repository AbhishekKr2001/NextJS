
const DataFetchServer = async ({ searchParams }) => {
    const params = await searchParams;
    const userName = params.name;

    if (!userName) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-gray-100">
                <div className="rounded-xl bg-white p-6 text-center shadow">
                    <h1 className="text-xl font-bold">
                        No Name Provided
                    </h1>

                    <p className="mt-2 text-gray-500">
                        Use ?name=abhi in the URL
                    </p>
                </div>
            </div>
        );
    }

    // Fetch data from Genderize API
    const res = await fetch(
        `https://api.genderize.io/?name=${userName}`
    );

    const userData = await res.json();

    // Simulate delay to demonstrate Suspense
    await new Promise((resolve) => setTimeout(resolve, 500));

    const isMale = userData.gender === "male";
    const confidence = Math.round(userData.probability * 100);

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
            <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-lg">

                {/* Avatar */}
                <div className="text-center">
                    <div
                        className={`mx-auto flex h-24 w-24 items-center justify-center rounded-full text-4xl ${isMale ? "bg-blue-500" : "bg-pink-500"
                            }`}
                    >
                        👤
                    </div>

                    <h1 className="mt-4 text-2xl font-bold capitalize">
                        {userData.name}
                    </h1>

                    <span
                        className={`mt-2 inline-block rounded-full px-4 py-2 text-sm font-semibold capitalize ${isMale
                                ? "bg-blue-100 text-blue-700"
                                : "bg-pink-100 text-pink-700"
                            }`}
                    >
                        {userData.gender}
                    </span>
                </div>

                {/* Confidence */}
                <div className="mt-6 rounded-lg bg-gray-50 p-4">
                    <div className="mb-2 flex justify-between">
                        <span className="text-sm text-gray-600">
                            Confidence
                        </span>

                        <span className="font-bold">
                            {confidence}%
                        </span>
                    </div>

                    <div className="h-3 rounded-full bg-gray-200">
                        <div
                            className={`h-3 rounded-full ${isMale ? "bg-blue-500" : "bg-pink-500"
                                }`}
                            style={{ width: `${confidence}%` }}
                        />
                    </div>
                </div>

                {/* Sample Size */}
                <div className="mt-4 flex justify-between rounded-lg bg-gray-50 p-4">
                    <span className="text-sm text-gray-600">
                        Data Sample Size
                    </span>

                    <span className="font-bold">
                        {userData.count.toLocaleString()}
                    </span>
                </div>

                {/* Accuracy */}
                <div className="mt-4 rounded-lg bg-gray-50 p-4 text-sm">
                    <span className="font-medium">
                        {confidence >= 90
                            ? "High Accuracy"
                            : confidence >= 70
                                ? "Moderate Accuracy"
                                : "Low Accuracy"}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default DataFetchServer;

