# fyi

## Setup
1. Create an [Airtable](http://airtable.com) base with the following tables:
    - `intro`
      - Text field (primary): `text`
      - URL field: `url`
    - `roles`
      - Text field (primary): `role`
      - Text field: `project`
      - URL field: `projectUrl`
2. Install dependencies:
    ```
    yarn
    ```
3. Install [Now](https://zeit.co/home) globally:
    ```
    npm i -g now
    ```

### Development
1. Add your Airtable base's info to a `.env` file at the root directory:
    ```
    AIRTABLE_BASE_ID=<your airtable base id>
    AIRTABLE_API_KEY=<your airtable api key>
    ```
2. Serve locally:
    ```
    now dev
    ```
    Vue's build server will tell you to use the wrong port. Once everything is running, scroll up a bit and look for this line:
    ```
    > Ready! Available at http://localhost:<port>
    ```

### Deployment
1. Add your Airtable base's info as [Now Secrets](https://zeit.co/docs/v2/serverless-functions/env-and-secrets/):
    ```
    now secret add airtable-base-id <your airtable base id>
    now secret add airtable-api-key <your airtable api key>
    ```
2. _If not using automated deployment:_ Deploy:
    ```
    now
    ```

## _Optional:_ Adding analytics
1. Create your [Heap](https://heap.io) environment(s)
2. Add a Heap environment's ID to a `.env.build` at the root directory:
    ```
    VUE_APP_HEAP_APP_ID=<your heap app id>
    ```
3. Add your production Heap environment's ID as a Now Secret:
    ```
    now secret add vue-app-heap-app-id <your heap app id>
    ```
