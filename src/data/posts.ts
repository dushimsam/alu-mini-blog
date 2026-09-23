import type { Post } from '../types/post'

// One post is dated a couple of hours ago so the "New!" badge is visible.
const twoHoursAgo = new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString()

export const posts: Post[] = [
  {
    id: 1,
    title: 'Right-sizing your EC2 instances',
    author: 'Samuel Dushimimana',
    content:
      'We were paying for compute we never used. After a week of watching CloudWatch metrics we moved most workloads down a tier and switched the bursty ones to spot instances. The bill dropped by a third with no hit to performance.',
    datePosted: twoHoursAgo,
  },
  {
    id: 2,
    title: 'Serverless is not always cheaper',
    author: 'Aline Uwase',
    content:
      'Lambda is great for spiky, event-driven work, but a function that runs constantly can cost more than a small always-on container. Do the math on invocations and duration before you assume serverless wins on price.',
    datePosted: '2026-09-20T14:10:00Z',
  },
  {
    id: 3,
    title: 'Tag everything in the cloud',
    author: 'Kevin Habimana',
    content:
      'A consistent tagging policy sounds boring until you get the monthly bill and cannot tell which team spent what. Owner, environment, and project tags turned our cost reports from a mystery into a spreadsheet anyone can read.',
    datePosted: '2026-09-18T08:45:00Z',
  },
]
