// @ts-nocheck
import React from "react";
import { Button } from "@/components/ui/button";

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: React.ErrorInfo;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error?: Error; resetError: () => void }>;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);

    // Log error to monitoring service in production
    if (process.env.NODE_ENV === "production") {
      // Replace with your error monitoring service
      // logErrorToService(error, errorInfo);
    }

    this.setState({ error, errorInfo });
  }

  resetError = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        const FallbackComponent = this.props.fallback;
        return <FallbackComponent error={this.state.error} resetError={this.resetError} />;
      }

      return <DefaultErrorFallback error={this.state.error} resetError={this.resetError} />;
    }

    return this.props.children;
  }
}

interface ErrorFallbackProps {
  error?: Error;
  resetError: () => void;
}

function DefaultErrorFallback({ error, resetError }: ErrorFallbackProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-sand px-4">
      <div className="max-w-md text-center">
        <div className="text-6xl mb-6">⚠️</div>
        <h1 className="text-2xl font-bold text-ink mb-4">Something went wrong</h1>
        <p className="text-ink/70 mb-6">
          We're sorry, but something unexpected happened. Please try refreshing the page or contact
          us if the problem persists.
        </p>

        {process.env.NODE_ENV === "development" && error && (
          <details className="mb-6 text-left bg-red-50 p-4 rounded border">
            <summary className="cursor-pointer font-medium text-red-800">
              Error Details (Development Only)
            </summary>
            <pre className="mt-2 text-xs text-red-700 overflow-auto">
              {error.message}
              {error.stack}
            </pre>
          </details>
        )}

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button onClick={resetError} variant="default">
            Try Again
          </Button>
          <Button onClick={() => window.location.reload()} variant="outline">
            Refresh Page
          </Button>
          <Button
            onClick={() => (window.location.href = "mailto:hello@safetap.gh")}
            variant="ghost"
          >
            Contact Support
          </Button>
        </div>
      </div>
    </div>
  );
}

// Hook for functional components
export function useErrorHandler() {
  return (error: Error, errorInfo?: React.ErrorInfo) => {
    console.error("Error caught by useErrorHandler:", error, errorInfo);

    // Log to monitoring service
    if (process.env.NODE_ENV === "production") {
      // logErrorToService(error, errorInfo);
    }
  };
}
