# Niall Conroy Assignment for Convergence Concepts

This repo contains my assignment for Convergence Concepts. In this README I'll explain some of the decisions I made while completing the assignment.

##  Photo JSON data
The photo data is fetched and cached on app load. Using redux/redux-saga/redux-persist makes this an easy task with little code to write. The photo data is only fetched once. This means that if the photo data is updated on the server, the cache in redux will be out of date. However, with this design, it is easy to write custom caching logic to address any use cases.  

Using redux here also makes the task of shuffling the list easier.

## Rendering the images
React Native has some tools to make rendering a large list suitably performant. Using the Flatlist component limits the number of items in the list that will be rendered without affecting the user's experience. Further FlatList configuration can yield optimizations but comes with trade-offs. 

To ensure the image network requests don't affect the scroll performance of the list, this request was decoupled from the initial render of each item in the flatlist. Doing this avoid the jittering and general poor performance of the list otherwise.

## Caching the images
Again React Native makes this task easy. The Image component already has caching functionality, so I just used that. This only works for iOS, however. There are many 3rd multiplatform solutions. Since the assignment itself was not multiplatform I considered it out of scope and went with the simplest solution. 

## Recursively shuffle the list
My function to recursively shuffle the list uses a non-recursive function to sort smaller portions of the list to avoid the "Maximum call stack exceeded" error encountered otherwise.


Keen to chat more about the assignment. Let me know if you have any questions 🙂.

Niall