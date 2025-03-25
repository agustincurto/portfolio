# Makefile for Agustin Curto Strasorier Portfolio

# Variables
NODE_VERSION := $(shell node -v)
NPM_VERSION := $(shell npm -v)

# Colors
YELLOW=\033[0;33m
GREEN=\033[0;32m
RED=\033[0;31m
BLUE=\033[0;34m
NC=\033[0m # No Color

# Default target
.PHONY: all
all: check-env install

# Check environment
.PHONY: check-env
check-env:
	@echo "$(BLUE)Checking environment...$(NC)"
	@echo "Node version: $(NODE_VERSION)"
	@echo "NPM version: $(NPM_VERSION)"
	@node -e "if (process.versions.node.split('.')[0] < 18) { console.error('$(RED)Node.js 18.x or higher is required$(NC)'); process.exit(1); } else { console.log('$(GREEN)Node.js version OK$(NC)'); }"

# Install dependencies
.PHONY: install
install: check-env
	@echo "$(BLUE)Installing dependencies...$(NC)"
	npm install
	@echo "$(GREEN)Dependencies installed successfully!$(NC)"

# Run development server
.PHONY: dev
dev:
	@echo "$(BLUE)Starting development server...$(NC)"
	npm run dev

# Build for production
.PHONY: build
build:
	@echo "$(BLUE)Building for production...$(NC)"
	npm run build
	@echo "$(GREEN)Build completed successfully!$(NC)"

# Start production server
.PHONY: start
start:
	@echo "$(BLUE)Starting production server...$(NC)"
	npm run start

# Update dependencies
.PHONY: update
update:
	@echo "$(BLUE)Updating dependencies...$(NC)"
	npm update
	@echo "$(GREEN)Dependencies updated successfully!$(NC)"

# Clean project
.PHONY: clean
clean:
	@echo "$(BLUE)Cleaning project...$(NC)"
	rm -rf node_modules
	rm -rf .next
	rm -rf out
	@echo "$(GREEN)Project cleaned successfully!$(NC)"

# Reinstall dependencies
.PHONY: reinstall
reinstall: clean install
	@echo "$(GREEN)Dependencies reinstalled successfully!$(NC)"

# Lint code
.PHONY: lint
lint:
	@echo "$(BLUE)Linting code...$(NC)"
	npm run lint

# Help
.PHONY: help
help:
	@echo "$(YELLOW)Available commands:$(NC)"
	@echo "  $(GREEN)make install$(NC)    - Install dependencies"
	@echo "  $(GREEN)make dev$(NC)        - Start development server"
	@echo "  $(GREEN)make build$(NC)      - Build for production"
	@echo "  $(GREEN)make start$(NC)      - Start production server"
	@echo "  $(GREEN)make update$(NC)     - Update dependencies"
	@echo "  $(GREEN)make clean$(NC)      - Clean project"
	@echo "  $(GREEN)make reinstall$(NC)  - Clean and reinstall dependencies"
	@echo "  $(GREEN)make lint$(NC)       - Lint code"
	@echo "  $(GREEN)make help$(NC)       - Show this help message"