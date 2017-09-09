# The Castle Company

## The Problem Presented

Aequilibrium is in the business of building castles (we really aren’t, but let’s pretend). Now, we also
believe in quality aesthetics, so we only want to build castles in two types of places:
- a. Peaks
- b. Valleys

Let’s say you have an array of integers that describes a stretch of land, where each integer represents the
current height of the land. Can you write a function that reads that array and returns the number of
castles that Aequilibrium should build on that stretch of land? You can write this solution in whatever
language you like.
*You can make the following assumptions:*
- You can always build a castle at the start of the array, provided it is non-empty.
- We only want to build one castle per peak or valley.
- A peak is an integer or series of integers that is above the immediately preceding and following
ints. For example, in the sequence [2,6,6,6,3] the sequence of 3 6s is a peak.
- A valley is an integer or series of integers that is below the immediately preceding and
following ints. For example, in the sequence [6,1,4] the "1" would be a valley.

## Extra Assumptions

To solve this problem I assumed that the last element in the array is never a peak or a valley since it has no following ints so The Castle Company never builds on the last integer or series of equal integers


## Running the code
To access a running version of the code access this plunkr: https://plnkr.co/edit/EK1leYhB7MMviyVum9ll?p=preview
- To run the tests inside the plunkr please uncomment the "boot.js" <script> tag