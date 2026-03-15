// Daily Reading Tracker

const dailyReadingTracker = () => {
    const readings = [];

    const addReading = (date, title, duration) => {
        readings.push({ date, title, duration });
    };

    const getReadings = () => {
        return readings;
    };

    const getTotalReadingTime = () => {
        return readings.reduce((total, reading) => total + reading.duration, 0);
    };

    return { addReading, getReadings, getTotalReadingTime };
};

// Example usage:
const tracker = dailyReadingTracker();
tracker.addReading('2026-03-15', '1984 by George Orwell', 2);
console.log(tracker.getReadings());
console.log(`Total Reading Time: ${tracker.getTotalReadingTime()} hours`);