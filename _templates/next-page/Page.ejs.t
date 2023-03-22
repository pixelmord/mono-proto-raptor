---
to: "<%= h.src() %>/<%= appPath %>/<%= name %>/page.tsx"
---

const <%= name %>Page = async () => {
  return <div><h1><%= name %></h1></div>;
}

export default <%= name %>Page;
