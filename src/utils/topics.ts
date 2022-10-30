import { Topic } from '../types/models';

export const groupByLevel = (topics: Topic[]) => {
    const levels: { [key: number]: Topic[] } = {};
    // the "key" is a number, and the "topic" is of type "any" since we dont have a topic type yet

    topics.forEach((topic) => {
    if (!levels[topic.level]) {
        levels[topic.level] = [];
    }
    levels[topic.level].push(topic);
    });

    return Object.values(levels); // returns the populated "levels" array
};



export const getCurrentActiveLevel = (levels: Topic[][]) => {
    return levels.reduce(
        (acc, levelTopics) => 
            levelTopics.every((topic) => topic.progress >= 1) ? acc + 1 : acc, 1); 
            // if all topics are completed, THEN increase currentLevel by 1
};