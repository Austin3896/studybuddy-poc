# StudyBuddy — Proof of Concept

StudyBuddy is a study management application
being developed by Team CodeNova for our capstone project.

The full application is intended to help students organize courses,
assignments and due dates. This proof of concept focuses on the
login feature.

## Proof-of-Concept Scope

The implemented login flow includes:

- Email and password sign-in.
- An error message for incorrect credentials.
- A protected dashboard displaying the signed-in user's email.
- Logout to end the user's session.
- Redirecting signed-out visitors to the login page.

Course and assignment management are outside this proof of concept.

## Technology

- **Framework:** TanStack Start.
- **User interface:** React 19.
- **Programming language:** TypeScript.
- **Authentication and backend:** Lovable Cloud, using Supabase technology.
- **Version control and collaboration:** GitHub.

The initial application was generated with assistance from Lovable.
Team members will review, test, and extend the code, documenting
their individual contributions through GitHub commits.

## Main Application Files

| File | Purpose |
|------|---------|
| `src/routes/index.tsx` | Welcome page |
| `src/routes/auth.tsx` | Login form and sign-in handling |
| `src/routes/_authenticated/route.tsx` | Login check for protected pages |
| `src/routes/_authenticated/dashboard.tsx` | Dashboard and logout |
| `src/routes/__root.tsx` | Shared page structure |
| `src/integrations/supabase/client.ts` | Authentication service connection |

## Creating a Test Account

In the Lovable project, open:

**Cloud → Users → Add User**

Create a test account with an email and password, then use those
credentials to test the login page. Do not commit passwords to GitHub.

## Testing the Feature

1. Open the dashboard while signed out.
   Expected result: redirect to the login page.
2. Enter incorrect credentials.
   Expected result: an error message.
3. Enter valid test-account credentials.
   Expected result: the dashboard opens and displays the user's email.
4. Log out.
   Expected result: return to the login page.
5. Try opening the dashboard again.
   Expected result: login is required.

Record the actual results before the class demonstration.


## Project Links

- [Application source code](https://github.com/Darima1002/studybuddy-poc)
- [CodeNova project documentation](https://github.com/Darima1002/CodeNova_Project)
- [Lovable development workspace](https://lovable.dev/projects/2b79fbe4-4850-42e8-9571-72505687a248)
