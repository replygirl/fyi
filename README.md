# fyi

## Setup
1. _Optional:_ Create your [Heap](https://heap.io) environment(s)
2. Create an [Airtable](http://airtable.com) base with the following tables:
  - `intro`
    - Text field (primary): `text`
    - URL field: `url`
  - `roles`
    - Text field (primary): `role`
    - Text field: `project`
    - URL field: `projectUrl`
3. Install dependencies:
    ```
    yarn
    ```
4. Install [Now](https://zeit.co/home) globally:
    ```
    npm i -g now
    ```

## Development
1. Add local environment variables:
    ```
    AIRTABLE_BASE_ID=<your airtable base id>
    AIRTABLE_API_KEY=<your airtable api key>
    VUE_APP_HEAP_APP_ID=<your heap app id>
    ```
2. Serve locally:
    ```
    now dev
    ```

## Deployment
1. Add environment variables for Now:
    ```
    now secrets add airtable-base-id <your airtable base id>
    now secrets add airtable-api-key <your airtable api key>
    now secrets add vue-app-heap-app-id <your heap app id>
    ```
2. Deploy:
    ```
    now
    ```
