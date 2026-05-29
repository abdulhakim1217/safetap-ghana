# Contributing to SafeTap Ghana Website

Thank you for your interest in contributing to the SafeTap Ghana website! This document provides guidelines and information for contributors.

## 🤝 How to Contribute

### Reporting Issues

1. **Check existing issues** first to avoid duplicates
2. **Use the issue template** when creating new issues
3. **Provide detailed information** including:
   - Steps to reproduce the problem
   - Expected vs actual behavior
   - Screenshots or videos if applicable
   - Browser and device information

### Submitting Changes

1. **Fork the repository**
2. **Create a feature branch** from `main`
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes** following our coding standards
4. **Test thoroughly** before submitting
5. **Commit with conventional format**
   ```bash
   git commit -m "feat: add new contact form validation"
   ```
6. **Push to your fork** and create a pull request

## 📋 Development Setup

### Prerequisites

- Node.js 18+ or Bun
- Git

### Local Development

```bash
# Clone your fork
git clone https://github.com/your-username/safetap-ghana-website.git
cd safetap-ghana-website

# Install dependencies
bun install

# Start development server
bun run dev
```

## 🎯 Coding Standards

### TypeScript

- Use TypeScript for all new code
- Provide proper type annotations
- Avoid `any` types when possible
- Use interfaces for object shapes

### React Components

- Use functional components with hooks
- Follow the existing component structure
- Add proper prop types and documentation
- Use semantic HTML elements

### Styling

- Use Tailwind CSS classes
- Follow the existing design system
- Ensure responsive design (mobile-first)
- Maintain accessibility standards

### Accessibility

- Include proper ARIA labels
- Ensure keyboard navigation works
- Maintain color contrast ratios
- Add alt text for images
- Use semantic HTML structure

## 🧪 Testing Guidelines

### Manual Testing Checklist

- [ ] All links and buttons work correctly
- [ ] Forms validate properly
- [ ] Mobile responsiveness works
- [ ] Keyboard navigation functions
- [ ] Screen reader compatibility
- [ ] Performance is acceptable

### Code Quality

```bash
# Run linting
bun run lint

# Check formatting
bun run format:check

# Type checking
bun run type-check

# Run all checks
bun run check-all
```

## 📝 Commit Message Format

We use [Conventional Commits](https://www.conventionalcommits.org/) format:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples

```bash
feat: add contact form validation
fix: resolve mobile menu toggle issue
docs: update README with deployment instructions
style: improve button hover animations
```

## 🔍 Pull Request Guidelines

### Before Submitting

- [ ] Code follows our style guidelines
- [ ] All tests pass
- [ ] Documentation is updated if needed
- [ ] Commit messages follow conventional format
- [ ] Changes are tested on multiple devices/browsers

### PR Description Template

```markdown
## Description

Brief description of changes made.

## Type of Change

- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Other (please describe)

## Testing

- [ ] Tested on desktop
- [ ] Tested on mobile
- [ ] Tested with keyboard navigation
- [ ] Tested with screen reader

## Screenshots

Include screenshots for UI changes.

## Additional Notes

Any additional information or context.
```

## 🎨 Design Guidelines

### Color Palette

- **Sand** (`#faf9f7`) - Primary background
- **Clay** (`#9d7c47`) - Primary accent
- **Savanna** (`#d4b896`) - Secondary accent
- **Ink** (`#2c2c2c`) - Text color

### Typography

- **Headings**: Fraunces (serif)
- **Body**: Outfit (sans-serif)

### Spacing

- Use Tailwind spacing scale
- Maintain consistent margins and padding
- Follow the existing layout patterns

## 🌍 Internationalization

Currently, the website is in English only. If you're interested in adding translations:

1. Discuss the approach in an issue first
2. Use a proper i18n library
3. Maintain the existing design and functionality
4. Ensure proper RTL support if needed

## 📱 Browser Support

Ensure compatibility with:

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🚀 Performance Guidelines

- Optimize images (use appropriate formats and sizes)
- Minimize bundle size
- Ensure fast loading times
- Follow Core Web Vitals guidelines
- Test on slower networks

## 🔒 Security Considerations

- Validate all user inputs
- Use HTTPS for all external requests
- Follow OWASP guidelines
- Don't commit sensitive information
- Use environment variables for configuration

## 📞 Getting Help

- **GitHub Issues**: For bugs and feature requests
- **Discussions**: For questions and general discussion
- **Email**: hello@safetap.gh for direct contact

## 🙏 Recognition

Contributors will be recognized in:

- GitHub contributors list
- Project documentation
- Release notes (for significant contributions)

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for helping make SafeTap Ghana's digital presence better! 🚰✨
