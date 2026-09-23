import { useEffect } from 'react'

// Wraps a component and logs when it mounts and unmounts.
export function withLogger<P extends object>(
  Wrapped: React.ComponentType<P>,
  name = Wrapped.displayName || Wrapped.name || 'Component',
) {
  function WithLogger(props: P) {
    useEffect(() => {
      console.log(`[withLogger] ${name} mounted`)
      return () => console.log(`[withLogger] ${name} unmounted`)
    }, [])

    return <Wrapped {...props} />
  }

  WithLogger.displayName = `withLogger(${name})`
  return WithLogger
}
