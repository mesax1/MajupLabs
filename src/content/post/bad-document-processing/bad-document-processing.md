---
title: "Bad AI Ideas: Automating Complex Document Processing"
description: "In the third part of our 'Bad AI Ideas' series, we examine a request to fully automate a 2000-page document processing workflow. This case highlights why aiming for 100% automation from the start is a common failure pattern and why human-in-the-loop systems are a more realistic approach."
publishDate: "2025-08-06"
tags: ["AI", "Document Processing", "Automation", "Bad AI Ideas"]
seriesId: "bad_ai_ideas"
coverImage:
  src: "./document-automation-ai.png"
  alt: "An AI robot sorting through a large stack of documents, searching for important pages."
orderInSeries: 3
draft: false
---

Automating document processing is one of the most requested applications of AI today. Many organizations want to eliminate tedious manual work, and the promise of AI seems to offer a perfect solution. However, the ambition to achieve 100% automation from the beginning often leads to project failure. The gap between a flashy demo and a reliable production system is significant.

This is the third post in our "Bad AI Ideas" series. We will explore a real-world example of a document automation project that could have been set up for success, but ended up being a failure given the promises that were made to the client.

# The Project Request

A potential client approached an AI-development agency with a challenging document processing task. They needed to prepare detailed proposals for their customers, and each proposal required them to manually review up to 2000 pages of PDF documents.

The document set was a mix of content. About half consisted of structured or semi-structured text like manuals and customer details. The other half was composed of visual information such as graphics, engineering plans, and other sort of images. From this large volume, only 40 to 60 pages were relevant for them (2-3% of the pages), as they were the pages needed to build the final work proposal for each of their customers. While the type of information needed was generally consistent across clients, some customers had special conditions that required identifying additional, unique pages.

The client wanted to completely automate this workflow. Their goal was to remove a task that took employees 4 to 10 hours (based on the experience of the employee, and the total amount of documents that the client shared), so that the AI-system could do it, even if it took a couple of hours for the AI, freeing up their team for other work.

:::important[Project Requirements Summary]
- Automate the processing of up to 2000 PDF pages per customer.
- Automatically identify and extract 40 to 60 relevant pages.
- Handle a complex mix of text, images, plans, and other visual data.
- The system must operate autonomously after the documents are uploaded.
- The system needs to account for customer-specific exceptions without manual guidance.
:::

# The Problems

If you have experience building AI systems, you might already see the red flags. The client’s request is a classic example of the "one-shot automation" fallacy, the belief that a complex human workflow can be flawlessly replaced by an AI system in a "single" step.

This leads to several questions when analyzing potential risks.

First, what happens when the automation misses two or three important pages? In the context of a customer proposal, a single missing detail could lead to an incorrect bid and a lost deal. The cost of even a small error is very high.

Second, how can the system reliably handle special conditions for certain customers? These exceptions often require deep domain knowledge and context that an automated system lacks. The employees who do this work today rely on their knowledge of the client request and their previous experience to identify when do they need to look for additional pages. Both are difficult to codify into rules or instructions for an AI, and even with prompts, how would you actually know when we are dealing with a special case?

Third, what if the AI gathers more pages than needed? This outcome isn't really bad. Let's suppose the AI workflow returns around 100 pages. Even if 40 of them are not relevant, if the AI did correctly grab all the other 60 pages, then the burden of reviewing 2000 pages was effectively reduced by 95%, as the employees must always read the AI's output to use the information to build the proposal. So, an extra step to filter out the irrelevant pages by the employees needs to be done.


So now, you might be thinking: The main problem is missing pages. If the employee in charge of building the proposal doesn't have all the information required, then, this provokes some additional problems: either the employee understand that information is missing, and they go and manually find the missing pages, possibly searching all over the 2000 pages, which defeats the purpose of the whole AI automation, or the employee doesn't even notice that some of the pages with important information are missing, which can translate into writing a bad proposal.

Actually, the main problem is actually the promise that was made to the client. The client was promised a fully automated solution to their time consuming process. This is where the biggest issue lies. If someone is selling you a proposal where the solution is 100% automated with LLMs, without human intervention or human review, they are lying to you.

# How I Would Have Approached This Problem

Instead of aiming for an unattainable 100% automation goal, I would have proposed building a powerful search assistance tool. The objective should be to reduce the time spent by the experts searching and analyzing the docs, not to replace them. 

 **A human expert must remain in the loop**. The core of the application should be a user interface designed for rapid verification and search capabilities. Once the user loads the docs, the system should start doing all the processing on the background and notify the user when it's finished. Once it's finished, all the important pages that the AI found, should be displayed for review. 
 
 **In the review interface**, The user will then approve or remove the pages following their expert criteria. If the user notices an important page is missing, for example, let's say the AI returned pages 59 and 61, but missed page 60, the user should be able to ask for page 60 immediately, and the system should add it to the important pages for immediate review.

 Additionally, if the user thinks some important pages might be missing, but they don't know the number, a search interface should allow the user to prompt the AI to search for pages related to what they asked about.**The search interface** would repeat the initial process of looking for relevant/important pages, but this time, with a focus on what the user is currently asking about, which might be an edge case that otherwise wouldn't have been found with the "standard" instructions of the AI system.

 Going even a bit further, every time the search interface is used, the system could then ask the user to include the search terms into the standard AI instructions (a.k.a prompts), to **continuously improve** the system with every use. That way, the user won't have to manually search over and over for the same pages when the special (edge) cases occur.



:::important[Key Takeaway]
Do not overpromise AI solutions to customers, it's better to deliver a functional system, that automates 50, 60, or 70% of the work, with the potential to improve it over time. Underpromise and reframe the project, so we can shift the goal from creating an impossible, fully autonomous system to building a useful search assistance tool. This approach respects the limitations of current AI while still delivering significant value. It reduces project failure risk and manages customers expectations. 
:::

If you are thinking about an AI project, I am available for consulting and development. I can help you find (and build) realistic and valuable ways to apply AI technology. 