import { createServer, Model } from "miragejs";

export function makeServer({ environment = "development" } = {}) {
  return createServer({
    environment,

    models: {
      tag: Model,
      task: Model,
    },

    seeds(server) {
      //данные для тэгов
      server.create("tag", { id: 1, name: "Array" });
      server.create("tag", { id: 41, name: "Matrix" });
      server.create("tag", { id: 123121, name: "Math" });
      server.create("tag", { id: 533242, name: "Dynamic Programming" });
      server.create("tag", { id: 11323, name: "Binary Search" });
      server.create("tag", { id: 435, name: "Graph" });
      server.create("tag", { id: 56, name: "Counting" });
      server.create("tag", { id: 6771, name: "Rolling Hash" });
      server.create("tag", { id: 67, name: "Memoization" });
      server.create("tag", { id: 8977, name: "Shell" });
      server.create("tag", { id: 66678, name: "Monotonic Queue" });

      //данные для тасков
      server.create("task", {
        id: 1,
        name: "Two Sum",
        description: "Given an array of integers, return indices of the two numbers such that they add up to a specific target.",
        level: "easy",
        tags: ["Array", "Hash Table"],
      });
      server.create("task", {
        id: 2,
        name: "Add Two Numbers",
        description:
          "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contains a single digit.",
        level: "medium",
        tags: ["Linked List", "Math"],
      });
      server.create("task", {
        id: 3,
        name: "Longest Substring Without Repeating Characters",
        description: "Given a string, find the length of the longest substring without repeating characters.",
        level: "medium",
        tags: ["Sl'id'ing Window", "Hash Table"],
      });
      server.create("task", {
        id: 4,
        name: "Median of Two Sorted Arrays",
        description: "There are two sorted arrays nums1 and nums2 of size m and n respectively. Find the median of the two sorted arrays.",
        level: "hard",
        tags: ["Array", "Binary Search"],
      });
      server.create("task", {
        id: 5,
        name: "Val'id' Parentheses",
        description: "Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is val'id'.",
        level: "easy",
        tags: ["Stack", "String"],
      });
      server.create("task", {
        id: 6,
        name: "Climbing Stairs",
        description:
          "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
        level: "easy",
        tags: ["Dynamic Programming"],
      });
      server.create("task", {
        id: 7,
        name: "Maximum Subarray",
        description: "Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.",
        level: "easy",
        tags: ["Array", "Dynamic Programming"],
      });
      server.create("task", {
        id: 8,
        name: "Product of Array Except Self",
        description:
          "Given an array nums of n integers where n > 1, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].",
        level: "medium",
        tags: ["Array", "Math"],
      });
      server.create("task", {
        id: 9,
        name: "Rotate Array",
        description: "Given an array, rotate the array to the right by k steps, where k is non-negative.",
        level: "easy",
        tags: ["Array"],
      });
      server.create("task", {
        id: 10,
        name: "Group Anagrams",
        description: "Given an array of strings, group the anagrams together.",
        level: "medium",
        tags: ["Hash Table", "String"],
      });
      server.create("task", {
        id: 11,
        name: "Top K Frequent Elements",
        description: "Given a non-empty array of integers, return the k most frequent elements.",
        level: "medium",
        tags: ["Heap", "Hash Table"],
      });
      server.create("task", {
        id: 12,
        name: "Merge Intervals",
        description: "Given a collection of intervals, merge all overlapping intervals.",
        level: "medium",
        tags: ["Array", "Sorting"],
      });
      server.create("task", {
        id: 13,
        name: "Binary Tree Inorder Traversal",
        description: "Given a binary tree, return the inorder traversal of its nodes' values.",
        level: "easy",
        tags: ["Tree", "DFS"],
      });
      server.create("task", {
        id: 14,
        name: "Maximum Depth of Binary Tree",
        description: "Given a binary tree, find its maximum depth.",
        level: "easy",
        tags: ["Tree", "DFS"],
      });
      server.create("task", {
        id: 15,
        name: "Same Tree",
        description: "Given two binary trees, write a function to check if they are the same or not.",
        level: "easy",
        tags: ["Tree", "DFS"],
      });
      server.create("task", {
        id: 16,
        name: "Symmetric Tree",
        description: "Given a binary tree, check whether it is a mirror of itself (symmetric around its center).",
        level: "easy",
        tags: ["Tree", "DFS"],
      });
      server.create("task", {
        id: 17,
        name: "Binary Tree 'Level' Order Traversal",
        description: "Given a binary tree, return the 'level' order traversal of its nodes' values.",
        level: "medium",
        tags: ["Tree", "BFS"],
      });
      server.create("task", {
        id: 18,
        name: "Path Sum",
        description:
          "Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.",
        level: "easy",
        tags: ["Tree", "DFS"],
      });
      server.create("task", {
        id: 19,
        name: "Binary Search",
        description: "Given a sorted array of integers, find the index of a target value. If the target is not found, return -1.",
        level: "easy",
        tags: ["Array", "Binary Search"],
      });
      server.create("task", {
        id: 20,
        name: "Count Primes",
        description: "Count the number of prime numbers less than a non-negative number, n.",
        level: "easy",
        tags: ["Math"],
      });
      server.create("task", {
        id: 21,
        name: "Fibonacci Number",
        description:
          "The Fibonacci numbers, commonly denoted F(n), form a sequence defined by the recurrence relation F(n) = F(n - 1) + F(n - 2) with seed values F(0) = 0, F(1) = 1.",
        level: "easy",
        tags: ["Math", "Dynamic Programming"],
      });
      server.create("task", {
        id: 22,
        name: "House Robber",
        description:
          "You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.",
        level: "medium",
        tags: ["Dynamic Programming"],
      });
      server.create("task", {
        id: 23,
        name: "Maximum Product Subarray",
        description:
          "Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.",
        level: "medium",
        tags: ["Array", "Dynamic Programming"],
      });
      server.create("task", {
        id: 24,
        name: "Find Minimum in Rotated Sorted Array",
        description: "Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand. Find the minimum element in the array.",
        level: "medium",
        tags: ["Array", "Binary Search"],
      });
      server.create("task", {
        id: 25,
        name: "Search in Rotated Sorted Array",
        description:
          "You are given an integer array nums sorted in ascending order, and an integer target. If target exists in the array, return its index. Otherwise, return -1.",
        level: "medium",
        tags: ["Array", "Binary Search"],
      });
      server.create("task", {
        id: 26,
        name: "Longest Palindromic Substring",
        description: "Given a string s, return the longest palindromic substring in s.",
        level: "medium",
        tags: ["String", "Dynamic Programming"],
      });
      server.create("task", {
        id: 27,
        name: "Val'id' Sudoku",
        description: "Determine if a Sudoku is val'id', according to: Sudoku Puzzles - The Rules.",
        level: "medium",
        tags: ["Array", "Hash Table"],
      });
      server.create("task", {
        id: 28,
        name: "Rotate Image",
        description: "You are given an n x n 2D matrix representing an image. Rotate the image by 90 degrees (clockwise).",
        level: "medium",
        tags: ["Array", "Matrix"],
      });
      server.create("task", {
        id: 29,
        name: "Group Anagrams",
        description: "Given an array of strings, group the anagrams together.",
        level: "medium",
        tags: ["Hash Table", "String"],
      });
      server.create("task", {
        id: 30,
        name: "Minimum Path Sum",
        description:
          "Given a m x n gr'id' filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of the numbers along its path.",
        level: "medium",
        tags: ["Dynamic Programming", "Array"],
      });
      server.create("task", {
        id: 31,
        name: "Unique Paths",
        description:
          "A robot is located at the top-left corner of a m x n gr'id'. The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the gr'id'. How many possible unique paths are there?",
        level: "medium",
        tags: ["Dynamic Programming"],
      });
      server.create("task", {
        id: 32,
        name: "Coin Change",
        description:
          "You are given coins of different denominations and a total amount of money. Write a function to compute the number of combinations that make up that amount.",
        level: "medium",
        tags: ["Dynamic Programming"],
      });
      server.create("task", {
        id: 33,
        name: "Longest Increasing Subsequence",
        description: "Given an integer array nums, return the length of the longest strictly increasing subsequence.",
        level: "medium",
        tags: ["Dynamic Programming"],
      });
      server.create("task", {
        id: 34,
        name: "Binary Tree Maximum Path Sum",
        description: "Given a non-empty binary tree, find the maximum path sum.",
        level: "hard",
        tags: ["Tree", "DFS"],
      });
      server.create("task", {
        id: 35,
        name: "Word Search",
        description: "Given an m x n board and a word, find if the word exists in the gr'id'.",
        level: "medium",
        tags: ["Backtracking"],
      });
      server.create("task", {
        id: 36,
        name: "Combination Sum",
        description:
          "Given an array of distinct integers cand'id'ates and a target integer target, return a list of all unique combinations of cand'id'ates where the chosen numbers sum to target.",
        level: "medium",
        tags: ["Backtracking"],
      });
      server.create("task", {
        id: 37,
        name: "Permutations",
        description: "Given an array nums of distinct integers, return all the possible permutations.",
        level: "medium",
        tags: ["Backtracking"],
      });
      server.create("task", {
        id: 38,
        name: "Subsets",
        description: "Given an integer array nums of unique elements, return all possible subsets (the power set).",
        level: "medium",
        tags: ["Backtracking"],
      });
      server.create("task", {
        id: 39,
        name: "N-Queens",
        description: "The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens threaten each other.",
        level: "hard",
        tags: ["Backtracking"],
      });
      server.create("task", {
        id: 40,
        name: "Letter Combinations of a Phone Number",
        description: "Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.",
        level: "medium",
        tags: ["Backtracking"],
      });
      server.create("task", {
        id: 41,
        name: "Climbing Stairs",
        description:
          "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
        level: "easy",
        tags: ["Dynamic Programming"],
      });
    },

    routes() {
      this.namespace = "api";

      this.get("/tags", (schema) => {
        return schema.tags.all();
      });

      this.get("/tasks", (schema) => {
        return schema.tasks.all();
      });

      this.post("/execute", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        const { language, code } = attrs;

        // обработка ответа
        if (code.includes("error")) {
          return { status: "error", error: "SyntaxError: Unexpected token" };
        }

        return { status: "success", output: `Hello, world!\n` };
      });
    },
  });
}
