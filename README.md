# Sugarbush iSno Extension
This repo contains experimental code for creating a browser extension to allow tweaking components of the iSno web app. For the time being, it only supports loading all of the possible tweaks, but ideally it should support profiles where a user can choose which tweaks they would like to apply and save those changes between sessions.

### Development
`core.ts` is the entrypoint for this application. Inside it, the enum `Tweak` lists the implemented tweaks that can be applied to the application. To implement a new tweak, create a new file that exports two members: `description: string` and `apply(): void`. Then, import the file in `core.ts`, add it to the `Tweak` enum, and add its mapping to the `getTweak` function (the pattern matching here will give you a compiler error until the implementation is mapped).
