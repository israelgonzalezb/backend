

const testUser = {
  username: "test1",
  password: "pass1"
};

const testRegisterUser = {
  username: "test3",
  password: "pass3"
};

const testRegisterResponse = {
  id: 3,
  username: "test3",
  password: "$2a$10$7B4kJDtEQGl3h.YA.qn8yOK3b0UKKfsnK8OaeMuZh1DnqEYp6zSfS",
  email: null
};

const expectedCategories = [
  { category_id: 1, id: 1, weight: 0.3 },
  { category_id: 2, id: 2, weight: 0.7 }
];

const expectedTrackedHabits = [
  {
    daily_goal_amount: "100 g",
    description: null,
    done_on: 1548966600000,
    id: 1,
    name: "eat broccoli",
    quantity: 1,
    user_habit_id: 1
  },
  {
    daily_goal_amount: "100 g",
    description: null,
    done_on: 1549139400000,
    id: 2,
    name: "eat broccoli",
    quantity: 2,
    user_habit_id: 1
  },
  {
    daily_goal_amount: "75 g",
    description: null,
    done_on: 1548970200000,
    id: 3,
    name: "eat carrots",
    quantity: 2,
    user_habit_id: 2
  },
  {
    daily_goal_amount: "1 mile",
    description: null,
    done_on: 1548981000000,
    id: 4,
    name: "walk",
    quantity: 1,
    user_habit_id: 3
  },
  {
    daily_goal_amount: "1 cup",
    description: null,
    done_on: 1548955800000,
    id: 5,
    name: "make my own coffee in the morning",
    quantity: 2,
    user_habit_id: 4
  },
  {
    daily_goal_amount: "1 cup",
    description: null,
    done_on: 1549125000000,
    id: 6,
    name: "make my own coffee in the morning",
    quantity: 2,
    user_habit_id: 4
  },
  {
    daily_goal_amount: "once per day",
    description: null,
    done_on: 1548964800000,
    id: 7,
    name: "bring my own lunch",
    quantity: 1,
    user_habit_id: 5
  },
  {
    daily_goal_amount: "once per day",
    description: null,
    done_on: 1548964800000,
    id: 8,
    name: "bring my own lunch",
    quantity: 1,
    user_habit_id: 5
  }
];

const expectedHabits = [
  {
    id: 1,
    category_id: 1,
    name: "eat broccoli",
    description: null,
    daily_goal_amount: "100 g",
    weight: 0.25
  },
  {
    id: 2,
    category_id: 1,
    name: "eat carrots",
    description: null,
    daily_goal_amount: "75 g",
    weight: 0.25
  },
  {
    id: 3,
    category_id: 1,
    name: "walk",
    description: null,
    daily_goal_amount: "1 mile",
    weight: 0.5
  },
  {
    id: 4,
    category_id: 2,
    name: "make my own coffee in the morning",
    description: null,
    daily_goal_amount: "1 cup",
    weight: 0.4
  },
  {
    id: 5,
    category_id: 2,
    name: "bring my own lunch",
    description: null,
    daily_goal_amount: "once per day",
    weight: 0.6
  }
];

const expectedUserCategories = [
  { category_id: 1, id: 1, user_id: 1, weight: 0.3 },
  { category_id: 2, id: 2, user_id: 1, weight: 0.7 },
  { category_id: 1, id: 3, user_id: 2, weight: 0.9 },
  { category_id: 2, id: 4, user_id: 2, weight: 0.1 }
];

const expectedUserHabits = [
  {
    category_id: 1,
    daily_goal_amount: "100 g",
    description: null,
    id: 1,
    name: "eat broccoli",
    user_id: 1,
    weight: 0.25
  },
  {
    category_id: 1,
    daily_goal_amount: "75 g",
    description: null,
    id: 2,
    name: "eat carrots",
    user_id: 1,
    weight: 0.25
  },
  {
    category_id: 1,
    daily_goal_amount: "1 mile",
    description: null,
    id: 3,
    name: "walk",
    user_id: 1,
    weight: 0.5
  },
  {
    category_id: 2,
    daily_goal_amount: "1 cup",
    description: null,
    id: 4,
    name: "make my own coffee in the morning",
    user_id: 1,
    weight: 0.4
  },
  {
    category_id: 2,
    daily_goal_amount: "once per day",
    description: null,
    id: 5,
    name: "bring my own lunch",
    user_id: 1,
    weight: 0.6
  },
  {
    category_id: 1,
    daily_goal_amount: "10",
    description: null,
    id: 6,
    name: "do pushups",
    user_id: 2,
    weight: 0.25
  },
  {
    category_id: 1,
    daily_goal_amount: "25",
    description: null,
    id: 7,
    name: "do situps",
    user_id: 2,
    weight: 0.25
  },
  {
    category_id: 1,
    daily_goal_amount: "2 miles",
    description: null,
    id: 8,
    name: "walk",
    user_id: 2,
    weight: 0.5
  },
  {
    category_id: 2,
    daily_goal_amount: "daily",
    description: null,
    id: 9,
    name: "record expenses in budget",
    user_id: 2,
    weight: 0.2
  },
  {
    category_id: 2,
    daily_goal_amount: "30 minutes",
    description: null,
    id: 10,
    name: "work on business ideas",
    user_id: 2,
    weight: 0.8
  }
];

const expectedHabitTracking = [
  { done_on: 1548966600000, id: 1, quantity: 1, user_habit_id: 1 },
  { done_on: 1549139400000, id: 2, quantity: 2, user_habit_id: 1 },
  { done_on: 1548970200000, id: 3, quantity: 2, user_habit_id: 2 },
  { done_on: 1548981000000, id: 4, quantity: 1, user_habit_id: 3 },
  { done_on: 1548955800000, id: 5, quantity: 2, user_habit_id: 4 },
  { done_on: 1549125000000, id: 6, quantity: 2, user_habit_id: 4 },
  { done_on: 1548964800000, id: 7, quantity: 1, user_habit_id: 5 },
  { done_on: 1548964800000, id: 8, quantity: 1, user_habit_id: 5 },
  { done_on: 1548979200000, id: 9, quantity: 1.5, user_habit_id: 6 },
  { done_on: 1548980100000, id: 10, quantity: 1, user_habit_id: 7 },
  { done_on: 1548987300000, id: 11, quantity: 2, user_habit_id: 8 },
  { done_on: 1548972900000, id: 12, quantity: 1, user_habit_id: 9 },
  { done_on: 1548991800000, id: 13, quantity: 1.5, user_habit_id: 10 }
];

const expectedFirstUserCategory = {
  category_id: 1,
  id: 1,
  user_id: 1,
  weight: 0.3
};

const expectedFirstUserHabit = {
  category_id: 1,
  daily_goal_amount: "100 g",
  description: null,
  id: 1,
  name: "eat broccoli",
  user_id: 1,
  weight: 0.25
};

const expectedFirstHabitTracking = {
  done_on: 1548966600000,
  id: 1,
  quantity: 1,
  user_habit_id: 1
};

const postUserCategory = {
  user_id: 1,
  category_id: 3,
  weight: 0.6
};

const expectedPostUserCategory = {
  id: 5,
  user_id: 1,
  category_id: 3,
  weight: 0.6
};

const expectedPutUserCategory = {
  id: 1,
  user_id: 1,
  category_id: 3,
  weight: 0.6
};

const postUserHabit = {
  user_id: 1,
  category_id: 1,
  name: "habit added yo",
  daily_goal_amount: 2,
  weight: 0.6
};

const expectedPostUserHabit = {
  id: 11,
  user_id: 1,
  category_id: 1,
  name: "habit added yo",
  description: null,
  daily_goal_amount: "2",
  weight: 0.6
};

const expectedPutUserHabit = {
  category_id: 1,
  daily_goal_amount: "2",
  description: null,
  id: 1,
  name: "habit added yo",
  user_id: 1,
  weight: 0.6
};

const postHabitTracking = {
  user_habit_id: 5,
  done_on: new Date("February 28 2019 12:30"),
  quantity: 4
};

const expectedPostHabitTracking = {
  done_on: "2019-02-28T20:30:00.000Z",
  id: 14,
  quantity: 4,
  user_habit_id: 5
};

const expectedPutHabitTracking = {
  done_on: "2019-02-28T20:30:00.000Z",
  id: 1,
  quantity: 4,
  user_habit_id: 5
};

module.exports = {
    testUser,
    testRegisterUser,
    testRegisterResponse,
    expectedCategories,
    expectedTrackedHabits,
    expectedHabits,
    expectedUserCategories,
    expectedUserHabits,
    expectedHabitTracking,
    expectedFirstUserCategory,
    expectedFirstUserHabit,
    expectedFirstHabitTracking,
    postUserCategory,
    expectedPostUserCategory,
    expectedPutUserCategory,
    postUserHabit,
    expectedPostUserHabit,
    expectedPutUserHabit,
    postHabitTracking,
    expectedPostHabitTracking,
    expectedPutHabitTracking
}
