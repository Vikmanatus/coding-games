# coding-games

Repository used to sync your favorite IDE with `CodinGame` IDE

## Prerequisites

For the `CodinGame` IDE to be synched with your IDE, you have to follow these steps:

- Login to your `CodinGame` account and open any puzzle

- Download `CG Local` browser extension for your favorite browser. You can find it on their [official repository](https://github.com/jmerle/cg-local-ext?tab=readme-ov-file)

- Run the following commands to make the setup scripts executable:

```bash
    yarn setup:scripts:permission
```

- To install `CG Local app`, please run the following command:

```bash
    yarn setup:install:cg-local
```

## Sync IDE with `CodinGame` IDE


- To run the `CG Local app`, please run the following command:

```bash
    yarn run:coding-sync
```

- Go to the Settings of `CodinGame` IDE in your puzzle, you'll see an option called `Use an external code editor` with an on/off switch, click on `ON`

- Select the file you desire, and voilà your IDE is now synched with `CodinGame` IDE 😀

## Ressources

- [Developper discussion on `CodinGame` forum for this setup ](https://www.codingame.com/forum/t/cg-local/10359)
- [CG Local Extension repository](https://github.com/jmerle/cg-local-ext?tab=readme-ov-file)
- [CG Local Application](https://github.com/jmerle/cg-local-app/tree/master?tab=readme-ov-file)