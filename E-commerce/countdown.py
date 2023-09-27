import time

# Define the total number to count to
count_to = 90

# Define the time duration in seconds (5 minutes)
duration = 5 * 60

# Calculate the delay between each count
delay = duration / count_to

# Start counting
for i in range(1, count_to + 1):
    print(i)
    time.sleep(delay)
