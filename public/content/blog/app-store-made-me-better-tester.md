---
title: "The App Store Made Me a Better Tester: Lessons from Shipping My Own iOS App"
date: July 25th, 2025
tags:
  - IndieDev
  - QA
  - iOS
  - Swift
excerpt: I have a confession to make. I'm not really a developer.
---
I have a confession to make. I'm not really a developer. Or at least that's what my imposter syndrome tells me. Serving primarily in a QA/test automation role for the last five years on a team that ships enterprise macOS apps at Jamf, I've always looked up to the brilliant devs on my team and wanted to be able to speak their language. I wanted to turn my app ideas into reality. I wanted more headroom to increase my salary over time and accelerate my journey to financial independence. This is originally why I decided to start learning Swift "for real" in late 2022, which ironically coincided with the introduction of ChatGPT and potentially the beginning of the end for junior developer jobs.

The main goal of the course was to have students publish an app to the App Store. Not just learn Swift, but actually go through the process of researching and validating an app idea: ensuring it solved a real problem that customers would pay for, performing user testing around UX flows, and creating a business plan to help pitch investors if needed. Since I had an app I wanted to get out into the world anyway, this was a fantastic accountability tool to finally turn my app idea into reality, and by the end of the program I had MovingBox in the App Store.

What I didn't expect, however, was how much this process taught me about the business of shipping software (at any scale - not just enterprise), how I could leverage the App Store review to truly make my app better, and how these learnings could make me a better teammate in my day to day work.
## Breaking Down Silos: Why Every QA Should Build Something
Before the days of Agile, software testing was very much a distinct process from software development. The development team spent months or years building the thing, the QA team tested the thing, lots of bugs would be found that could have been avoided had testers been involved at the beginning, and if budgets allowed hopefully some of the bugs were fixed.

The Agile methodology integrated testers, developers, and product into a single team. It prioritized communication, early and often. Short cycle times and regular planning and refinement sessions allowed testers to give their input before the developer wrote a single line of code, saving countless hours of unnecessary rework.

Even with these advancements in project management, testers can still fall into the mindset of being “just a tester” — not realizing that their perspective is valuable all throughout the software development lifecycle, not just at the end.

Building your own app throws all that out the window. No one else is going to plan for you. No one else is going to write the code for you. It’s all your call, for better or worse, so this is your opportunity to truly build in quality from the start without the constraints of a tight budget or deadline. 

Wearing all of the hats necessary to ship a piece of software gave me a new appreciation for my coworkers at my day job. This process forced me to learn more about the roles of product management, development and marketing. Naturally the process of building the product was the most fun as an already technical person, but I was really surprised by how difficult I found the business and marketing side, so I know I’ll need to invest much more time in practice there if I want anyone to actually use my app. Even if you don’t want to make a profit with your app, I’d suggest still monetizing it in some way and going through the marketing motions to get the word out. You’re going to (or already have) spent many nights and weekends building the thing, so you might as well let anyone who finds it valuable show you its value (not to mention you should at least try to cover your core expenses like the Apple Developer program membership, subscription costs for any other tools you might be using, and any backend services you may be using).
## Automate Everything
While larger organizations and indie developers share the same basic goal of shipping high quality solutions to customers, the process couldn't be more different. Larger teams have the luxury of taking some extra time to perform manual release testing or exploratory testing. Indie developers need to use every minute as effectively as possible, so an investment in automation simply opens up time to work on more important things. Automating as much of the building and testing process as possible was a huge priority for me - not just because I find that work enjoyable, but also as a survival tactic as a solo developer. 
### Testing
[Snapshot testing](https://github.com/pointfreeco/swift-snapshot-testing) is the quickest way to get great UI test coverage with only a few tests, and quickly catch visual regressions that you might have otherwise overlooked. Once I had a few snapshot tests in place, I spent a solid sprint automating as many end-user scenarios as I could manage using XCUITest. The page object model (or screen object model as it’s sometimes referred to in iOS circles) made it easy to build out reusable XCUIElement libraries of all my app’s visual elements and key pieces of end user functionality.
### App Store Screenshots
Fastlane’s [frameit](https://docs.fastlane.tools/actions/frameit/) tool makes it easy to automate the process of building your App Store screenshots. This honestly felt a bit like overkill at the time, but between different languages, dark/light mode and frequent UI changes I wanted to remove the tedious work of building marketing screenshots by hand (or even through a web app) so that I could build it right into my CI/CD pipeline.

Unfortunately the built in frames have not been updated since iPhone 14 (close enough for now 🤷‍♂️) so I need to work on defining custom device frames to get the latest generation iPhones in there.

### Tying it all Together
I decided to go with [Xcode Cloud](https://developer.apple.com/xcode-cloud/) for my CI/CD system as it has a pretty generous free tier, is simple to get up and running, and does everything I need (so far). The killer feature for me however is the first class integration with App Store Connect and the ability to build and deploy to TestFlight - no Fastlane required. This takes the headaches out of code signing and managing API credentials and lets you focus on shipping your app.
## The App Store Gauntlet: Lessons in Quality from Apple's Review Process
App Store review, the approval process that’s initiated when a new build of an app is submitted for distribution through the App Store, is something most Apple developers love to hate. I chose to take a different attitude with the process. No one knows iPhone apps better than the team at Apple, so I leveraged the expertise of the App Review team to learn how to make my app feel at home on the platform and ultimately create a satisfying digital experience for our mutual customers.

That being said, I was extremely fortunate in that I did not have a lengthy approval process with lots of back and forth (I just missed a checkbox or two in my App Store listing settings) and the final build was approved within hours of submission. While a little more feedback would have been nice, I can’t complain too much.
## Bringing It Back to QA: Applying Developer Experience to Testing
Learning to build and ship my own apps has transformed my perspective on every stage of the software delivery process. Having at least a basic knowledge of what it takes to build an app has taught me how to ask better questions during requirements gathering, write more actionable bug reports that help my developers quickly fix issues, and advocate for quality at a greater degree throughout the development process. From the business side, I can’t wait for my user base to ramp up so that I can start slicing and dicing my TelemetryDeck data to learn how my app can better serve its customers.

There’s still a ton to learn, and the imposter syndrome isn't going away anytime soon, but shipping my own app has at least given me the confidence to put something out into the world and see where it goes.