# The Markdown Salad for avoiding repetitive elements or Raw HTML.
This repo uses a special kind of Markdown which I designed as if I only had 5 minutes to do so. Yeah, not exactly a state-of-art product.

Basically, by using HTML elements inside markdown it is possible to make things only be displayed at the (website)[https://gabrieltk.vercel.app/](trusted env) or at GitHub (basic HTML only).

Although I am writing this mostly for myself, if you like this idea and end up implementing it yourself, I'd love if you gave me some credit, afterall, I am still trying to apply to an university, which is quite tough.

## Displaying only on the Website

So, this is useful for script tags, Web Components or everything GitHub would consider remotely threatening.

The syntax for this kind of content is:

```
<!--- JSX
Code Here
-->
```

See how it is inside a comment? This prevents GitHub or other pure MD renderers to attempt to render that, which would most likely result in raw HTML code being displayed in the middle of your beautiful profile.

## Displaying only on GitHub

This is useful to avoid repeated content, content that your website renders better natively and mainly to avoid that "Go to my website" link at your website - which would result in a paradox (aka something my single braincell cannot handle well).

The syntax for this kind of content is:

```
<!--- NOX -->
Never gonna give you up
Never gonna let you down
Never gonna run around and desert you
Never gonna make you cry
Never gonna say goodbye
Never gonna tell a lie and hurt you
<!--- END: NOX -->
```
By the way, if you don't wanna have to attend a psychologist for the rest of your life... Don't try nesting both... Just throw in a single comment...
